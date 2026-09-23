# Marca Cargoban — resumen para desarrollo

Fuente: `docs/manual-de-marca-cargoban.pdf` (32 páginas). Este resumen recoge lo que aplica al sitio web.

## Colores (RGB oficiales del manual)
| Nombre | Hex | RGB | Uso en el sitio |
|---|---|---|---|
| Azul marino | `#151d61` | 21, 29, 97 | Color de marca. Fondo de la sección de contacto |
| Turquesa | `#0599ba` | 5, 153, 186 | Estructura: etiquetas de sección, líneas, luz de fondo |
| Verde | `#a8cf45` | 168, 207, 69 | Acento único y escaso. Botón principal y palabra destacada |

Derivados propios del sitio, no del manual:
- `navy-900 #0b1038` y `navy-950 #070b26`: oscurecimientos del azul de marca usados como
  campo de fondo. El manual no los prohíbe: son fondo, no logotipo.
- `teal-400 #2bb4d4`: aclarado del turquesa oficial. Necesario porque el turquesa `#0599ba`
  sobre fondo azul muy oscuro no alcanza el contraste mínimo de accesibilidad en texto
  pequeño. Se usa solo en texto y líneas finas, nunca en el logotipo.
- `green-300 #c2e070`: aclarado del verde, solo para el estado de ratón encima de un botón.

Regla de dosificación: el verde no se reparte por toda la página. Ocupa una fracción mínima
de la superficie. Es lo que le da fuerza.

Los colores corporativos nunca se invierten ni se manipulan. Sin degradados, volúmenes ni
efectos sobre el logo.

## Logotipo
- La versión original es la **vertical**. La **horizontal** se permite en pocas aplicaciones y
  **debe ser aprobada por la compañía**. El sitio la usa en la cabecera por altura disponible;
  pendiente de aprobación de Cargoban.
- Área de aislamiento: la altura de la "C" de CARGOBAN por cada lado.
- Sobre fondo oscuro se usa la versión en blanco, con el símbolo manteniendo verde y turquesa.
- El símbolo solo puede usarse fragmentado o en transparencia únicamente cuando la marca
  completa está presente en la misma pieza. El sitio lo usa como textura de fondo y como favicon,
  con el logotipo completo presente en cabecera y pie.
- La animación de apertura gira las dos cuñas de la aguja, y solo hasta que se asientan en su
  posición correcta: el logotipo completo nunca se muestra rotado ni queda rotado. Como el manual
  prohíbe rotar la marca, conviene que Cargoban confirme esta lectura antes de publicar.
- Prohibido: cambiar tipografía, proporciones, orden de los elementos, colores, rotar, reflejar,
  añadir elementos.

Archivos vectoriales extraídos del manual, en `public/marca/`:
`logo-vertical.svg`, `logo-vertical-blanco.svg`, `logo-horizontal.svg`, `logo-horizontal-blanco.svg`,
`isotipo.svg`, `isotipo-blanco.svg`.
El azul se normalizó al RGB oficial `#151d61` (el PDF traía la conversión CMYK `#30355b`).

## Tipografía
- Logo: Century Gothic Bold. No se toca: el logo va como SVG, no como texto.
- Titulares: **Jost Variable**. Geométrica derivada de Futura, la misma familia a la que
  pertenece Century Gothic. Es la más fiel al logo entre las libres, y al ser variable un solo
  archivo cubre todos los pesos.
- Texto: **Archivo Variable**. Grotesca de alta legibilidad para párrafos, listas y datos.
- Ambas autoalojadas con Fontsource. Sin llamadas a Google Fonts.

Century Gothic no es de uso libre, por eso no se usa en web.

## Sistema gráfico tomado de las piezas de redes sociales
Las piezas de Instagram de Cargoban fijaron el lenguaje que sigue el sitio:
- Fondo oscuro con fotografía de operación real.
- Titular grande con una palabra clave en verde.
- Etiquetas cortas en mayúscula con espaciado amplio.
- Bullets en rombo verde.
- Numeración visible de los elementos de una serie.

## Texturas
El manual permite texturas derivadas del símbolo repetido. El sitio las usa al 6 o 7 % de
opacidad en portada y contacto. Requieren aprobación de Cargoban.

## Grano
Capa de grano al 4,5 % sobre todo el sitio, generada con un filtro SVG en línea. No es del
manual: es un recurso de acabado que unifica fotografías de distinta calidad y quita el aspecto
plano de los fondos digitales.
