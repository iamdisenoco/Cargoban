/*
  Desplazamiento suave con Lenis, la base de la sensación de cargokite.com.

  Lenis no reemplaza el scroll del navegador: lo sigue usando, solo suaviza la
  rueda del ratón. Por eso las animaciones de CSS con `animation-timeline`, los
  paneles `sticky` y la cabecera siguen funcionando igual. En pantallas táctiles
  no toca nada: el dedo ya tiene su propia inercia y es mejor que cualquier imitación.

  No se activa para quien pidió menos movimiento.
*/
import Lenis from 'lenis';

const menosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!menosMovimiento.matches) {
  const lenis = new Lenis({ autoRaf: true, lerp: 0.1 });
  const html = document.documentElement;

  /*
    Mientras algo bloquea el scroll (el intro de la brújula pone overflow:hidden
    en <html>, el menú móvil lo pone en <body>), Lenis se detiene. Si no, la rueda
    movería la página por debajo del intro o del menú.
  */
  const bloqueado = () =>
    html.style.overflow === 'hidden' || document.body.style.overflow === 'hidden';

  /*
    Reanudar espera un fotograma. La rueda que cierra el intro quita el bloqueo
    dentro de ese mismo evento; si Lenis se reanudara ya, procesaría esa misma
    rueda y la página bajaría al cerrar el intro.
  */
  const sincronizar = () => {
    if (bloqueado()) return lenis.stop();
    requestAnimationFrame(() => {
      if (!bloqueado()) lenis.start();
    });
  };
  const observador = new MutationObserver(sincronizar);
  observador.observe(html, { attributes: true, attributeFilter: ['style'] });
  observador.observe(document.body, { attributes: true, attributeFilter: ['style'] });
  sincronizar();

  /*
    Enlaces a una sección de la misma página. Se lleva el scroll con Lenis y se
    conserva lo que hace el navegador por su cuenta: la dirección cambia (#servicios)
    y el foco del teclado pasa a la sección, para que el siguiente Tab siga desde ahí.
    El "Saltar al contenido" queda fuera: ese tiene que ser instantáneo.
  */
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const enlace = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
    if (!enlace || enlace.getAttribute('href') === '#contenido') return;

    const id = decodeURIComponent(enlace.hash.slice(1));
    const destino = id ? document.getElementById(id) : null;
    if (!destino) return;

    e.preventDefault();
    history.pushState(null, '', `#${id}`);

    // El menú móvil suelta el bloqueo en este mismo clic. Se reanuda Lenis ya:
    // si lo reanudara el fotograma de `sincronizar`, su reset() cortaría el viaje.
    if (!bloqueado()) lenis.start();
    lenis.scrollTo(destino);

    if (!destino.hasAttribute('tabindex')) destino.setAttribute('tabindex', '-1');
    destino.focus({ preventScroll: true });
  });
}
