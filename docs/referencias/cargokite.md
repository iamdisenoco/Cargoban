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
