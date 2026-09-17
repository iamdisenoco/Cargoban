# Marca Cargoban — resumen para desarrollo

Fuente: `docs/manual-de-marca-cargoban.pdf` (32 páginas). Este resumen recoge lo que aplica al sitio web.

## Colores (RGB oficiales)
| Nombre  | Hex       | RGB          | Uso en el sitio |
|---------|-----------|--------------|-----------------|
| Azul marino | `#151d61` | 21, 29, 97   | Color principal: títulos, header, footer, fondos |
| Turquesa    | `#0599ba` | 5, 153, 186  | Acentos, enlaces, bloque de contacto |
| Verde       | `#a8cf45` | 168, 207, 69 | Botón principal, detalles |
| Grises      | K85 / K55 / K30 | | Texto y bordes |

Los colores corporativos nunca se invierten ni se manipulan. Sin degradados, volúmenes ni efectos sobre el logo.

## Logotipo
- La versión original es la **vertical**. La **horizontal** se permite en pocas aplicaciones y **debe ser aprobada por la compañía**. El sitio la usa en el header por espacio; pendiente de aprobación.
- Área de aislamiento: la altura de la "C" de CARGOBAN por cada lado.
- Sobre fondos oscuros o de color se usa la versión en blanco (`*-blanco.svg`), con el símbolo manteniendo verde y turquesa.
- Sobre fotografías recargadas: barra blanca al 30 % de transparencia o versión en negativo.
- El símbolo solo (isotipo) puede usarse fragmentado o en transparencia únicamente cuando la marca completa está presente en la misma pieza. El sitio lo usa como textura de fondo en el hero y como favicon.
- Prohibido: cambiar tipografía, proporciones, orden de los elementos, colores, rotar, reflejar, añadir elementos.

Archivos vectoriales extraídos del manual, en `public/marca/`:
`logo-vertical.svg`, `logo-vertical-blanco.svg`, `logo-horizontal.svg`, `logo-horizontal-blanco.svg`, `isotipo.svg`, `isotipo-blanco.svg`.
El azul se normalizó al RGB oficial `#151d61` (el PDF traía la conversión CMYK `#30355b`).

## Tipografía
- Logo: Century Gothic Bold (no se toca; el logo va como SVG).
- Web: Century Gothic no es libre. Se usa **Poppins** (600/700) para títulos, geométrica y cercana, e **Inter** para texto corrido. Ambas autoalojadas vía Fontsource, sin llamadas a Google Fonts.

## Texturas
El manual permite texturas derivadas del símbolo repetido (sobre blanco, azul o verde). Requieren aprobación de Cargoban. El hero usa una versión al 6 % de opacidad.
