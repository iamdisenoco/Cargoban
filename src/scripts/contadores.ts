/*
  Cifras que cuentan hacia arriba al entrar en pantalla (sección Nosotros).

  El número final ya está escrito en el HTML: sin JavaScript, o para quien pidió
  menos movimiento, se ve tal cual y no pasa nada. Solo si el script corre y la
  cifra todavía no se ve, se pone en cero y sube hasta su valor.
  Los lectores de pantalla leen siempre el valor final (aria-label), no la cuenta.
*/
const menosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const cifras = document.querySelectorAll<HTMLElement>('[data-contador]');

const formato = new Intl.NumberFormat('es-CO');
const escribir = (el: HTMLElement, n: number) => {
  el.textContent = `${el.dataset.prefijo ?? ''}${formato.format(n)}`;
};

if (!menosMovimiento && 'IntersectionObserver' in window && cifras.length) {
  const DURACION = 1600;
  // Sale rápido y frena al final, como las entradas de los titulares.
  const frenar = (t: number) => 1 - Math.pow(1 - t, 4);

  const contar = (el: HTMLElement) => {
    const final = Number(el.dataset.contador);
    const inicio = performance.now();
    const paso = (ahora: number) => {
      const t = Math.min((ahora - inicio) / DURACION, 1);
      escribir(el, Math.round(final * frenar(t)));
      if (t < 1) requestAnimationFrame(paso);
    };
    requestAnimationFrame(paso);
  };

  const observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (!entrada.isIntersecting) continue;
        observador.unobserve(entrada.target);
        contar(entrada.target as HTMLElement);
      }
    },
    { rootMargin: '0px 0px -15% 0px' },
  );

  for (const el of cifras) {
    el.setAttribute('aria-label', el.textContent?.trim() ?? '');
    const r = el.getBoundingClientRect();
    // Las que ya se ven al cargar quedan quietas: no se las hace saltar a cero.
    if (r.top < window.innerHeight && r.bottom > 0) continue;
    escribir(el, 0);
    observador.observe(el);
  }
}
