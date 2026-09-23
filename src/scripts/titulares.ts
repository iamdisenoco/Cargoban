/*
  Entrada de los titulares palabra por palabra.

  Los titulares están visibles de partida. Los oculta la clase `titulares-listos`,
  que pone un script en línea del <head> de `Base.astro` para que el titular del
  hero no se pinte, se esconda y vuelva a entrar. Ese mismo script la quita al
  terminar la carga si este módulo no llegó a correr: nadie se queda sin leer.

  A diferencia de `.revelar`, esto no va atado a la posición del scroll: la
  entrada se dispara una vez y corre con su propio reloj, como en cargokite.
  Así funciona también en Firefox, que todavía no tiene `animation-timeline`.
*/
const html = document.documentElement;
// La clase solo se pone si hay IntersectionObserver y no se pidió menos movimiento.
if (html.classList.contains('titulares-listos')) {
  html.dataset.titulares = 'activos';

  const observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (!entrada.isIntersecting) continue;
        entrada.target.classList.add('titular-visible');
        observador.unobserve(entrada.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px' },
  );

  const empezar = () =>
    document.querySelectorAll('[data-titular]').forEach((t) => observador.observe(t));

  // Mientras el intro de la brújula tapa la pantalla, el titular del hero
  // espera: si entrara por debajo, nadie lo vería entrar. Arranca cuando el
  // telón empieza a caer, o al cerrarse si alguien salta la animación.
  if (html.dataset.intro === 'abierto') {
    let empezado = false;
    const unaVez = () => {
      if (empezado) return;
      empezado = true;
      empezar();
    };
    document.addEventListener('intro:destapando', unaVez, { once: true });
    document.addEventListener('intro:cerrado', unaVez, { once: true });
  } else {
    empezar();
  }
}
