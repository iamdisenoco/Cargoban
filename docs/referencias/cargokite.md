# Referencia: cargokite.com

Jon la mandó el 23/09/2026: «me encantó esta página, quiero que hagamos así la nuestra,
que tenga esos mismos movimientos, obviamente con la imagen de Cargoban».

Lo de aquí abajo **no es de oídas**: sale de descargar el HTML y los dos paquetes de
JavaScript del sitio y leerlos. Lo que no se pudo ver se dice con esas palabras.

## Qué usa, comprobado en su paquete de JavaScript

`index.a05c254c.js`, 1,9 MB. Apariciones encontradas dentro del paquete:

| Librería | Apariciones | Para qué la usan |
|---|---|---|
| **Swiper** | 344 | carruseles |
| **Three.js** | 334 | los modelos 3D del barco que giran y se acercan solos |
| **GSAP** | 121 | motor de animación |
| **GSAP Flip** | 96 | mover un elemento de un sitio a otro conservando su aspecto |
| **GSAP ScrollTrigger** | 94 | todo lo que se dispara al bajar |
| **Barba.js** | 46 | transición entre páginas sin recargar |
| **Lenis** (@studio-freight) | 31 | desplazamiento suave, es la base de la sensación |
| **GSAP SplitText** | 16 | titulares que entran letra por letra o palabra por palabra |

En el HTML: `data-barba="wrapper"`, `data-barba-namespace`, `data-lenis-prevent` (×4),
`data-logo-main` (×6), `data-popup` (×12). Cero `<canvas>` en el HTML de partida:
Three.js los crea al vuelo. Un solo `<video>` y un `.mp4`.

## Su estructura

- h1: «Low Emission Ocean Transportation»
- «Welcome to CargoKite, where engineering excellence meets innovation»
- El problema en cinco golpes cortos, cada uno empezando por puntos suspensivos:
  «…not reliable due to a lack of resilience», «…not sustainable», «…only for standard
  routes», «…not customer-oriented», «…slow»
- «Our answer is small, autonomous, wind-powered cargo ships»
- «Transforming a 500-year-old, $400B market»
- «Trusted by top Partners & Supporters»
- Preguntas frecuentes

Cintas de texto en movimiento (`marquee`) en el cuerpo y en el pie. Eso ya lo tenemos
en `Cinta.astro`.

## Tiempos y curvas, leídos de su código (23/09)

No se vio en movimiento, pero sí se leyeron los valores que le pasan a GSAP en
`index.a05c254c.js`. Son datos, no impresiones:

- **Pantalla de carga** (`.trans`): cinco columnas (`.trans__item`) tapan la página. Un
  contador sube de 00 a 100 % con una barra, en tres fases de 2,2 s, 2,45 s y 1,25 s, y el
  titular del hero viaja con él hasta su sitio. Al final las columnas caen: `scaleY: 0`,
  origen abajo, 1 s, `expo.in`, 0,1 s entre una y otra. Sale en cada carga, no una vez.
  El desplazamiento suave está detenido (`lenis.stop()`) mientras dura.
- **Titulares por palabras:** `yPercent: 60` más opacidad de 0 a 1, **0,4 s por palabra y
  0,02 s entre una y otra** (0,6 s y 0,03 s en los párrafos). Mucho más rápido que lo que
  pusimos al principio (1,1 s y 0,07 s): pendiente de ajustarlo con la grabación.
- **Imágenes:** se abren con `clipPath` de `inset(10%)` a `inset(0%)`, 1 s, `expo.out`.
- **Logo de la cabecera:** el símbolo gira con la velocidad del scroll (`lenis.velocity`,
  topada a ±80, suavizada con `lerp` 0,08).

## Visto en Chromium (23/09, con autorización de Jon)

Jon autorizó que Chromium confíe en el certificado del proxy (`--ignore-certificate-errors-spki-list`
con la huella del CA). Con eso se recorrió la portada entera a 1440 px y 390 px. Capturas y videos
quedaron en el scratchpad de esa sesión (no en el repo). Lo que define cómo se siente, por peso:

1. **Pantalla de carga:** naranja #eb2c00 a pantalla completa, contador grande 00→100 % con barra
   fina, el titular baja con el contador y vuelve a su sitio; salida en columnas escalonadas.
2. **Hero fijo (`sticky`) que queda debajo:** la sección siguiente sube encima como una cortina,
   con parallax por capas (el título baja más lento que la ilustración).
3. **Sección fija horizontal** con dibujo técnico de línea fina: un barco gigante cruza y tapa el
   texto, aparece la flota pequeña, una frase enorme pasa de lado arrastrada por el scroll.
4. **Tipografía grande en peso 500** (no negrita), 60 px en h2 y 83 px en h1 a 1440, interlineado
   1,2; una o dos palabras clave en el color de acento. Textos que se «pintan» de gris a negro al bajar.
5. **Fondo claro** (#fff y #eaeef0) con dos golpes oscuros: hero #013a54 y tecnología #111.
   Un solo acento, naranja #ff471d.
6. **Imágenes que se abren con recorte** y bloques de color que crecen desde un borde. Todo en
   rectángulos de esquina recta.
7. **Composición editorial:** etiqueta gris pequeña, título grande, columnas desfasadas, mucho aire.
   Enlaces con punto final ("About us."), cintas de texto que corren (logos, pie).
8. **Cabecera** que al bajar se reduce a símbolo + menú + botón, y cambia de claro a oscuro según
   la sección de debajo. El símbolo gira con la velocidad del scroll (esto no se trae: el manual de
   Cargoban prohíbe rotar la marca).

Secciones de la portada, en orden: hero, intro de empresa, problema (fichas con foto en mampostería
desfasada), solución (ilustración que crece + frase que se pinta), sección horizontal fija,
tecnología (foto a todo el ancho, tarjeta de acento que crece, grilla oscura de datos), por qué
nosotros (tarjetas escalonadas), socios (cintas de logos), preguntas frecuentes, pie con boletín.

## Lo que NO se pudo ver, y por qué

No se pudo abrir la página en un navegador. El Chromium de este entorno no confía en el
certificado del proxy y las dos formas de arreglarlo (darle la clave pública del CA al
navegador, o instalar `certutil` para meterla en el almacén) las bloqueó el clasificador
de permisos. **Así que no hay capturas de la página en movimiento ni medición de sus
tiempos y curvas.** Sabemos con qué está hecha, no cómo se siente.

Para verla de verdad hay que desbloquear una de esas dos cosas, o que Jon mande una
grabación de pantalla bajando por la página.

## Qué se puede traer a Cargoban y qué no

**Sí, y sin librerías nuevas:**
- Desplazamiento suave: Lenis pesa poco y es lo que más cambia la sensación.
- Titulares que entran por palabras: se hace con CSS y `animation-timeline`, sin SplitText.
- Elemento que viaja de un sitio a otro (lo de GSAP Flip): la apertura de la brújula ya
  hace exactamente eso, el símbolo se coloca dentro del logotipo.
- Transición entre páginas: ya está puesta con `@view-transition` nativo, sin Barba.

**No, o no todavía:**
- Three.js. CargoKite vende un barco que todavía no existe y por eso necesita un modelo 3D.
  Cargoban tiene 50 años de operación real y fotografías: meter un contenedor en 3D sería
  disfrazar de futurista a una empresa cuya fuerza es que lleva medio siglo haciéndolo.
  La respuesta equivalente aquí son **las fotos y los videos propios**, no un modelo.
- Swiper: 344 apariciones de librería para carruseles que este sitio no necesita.
