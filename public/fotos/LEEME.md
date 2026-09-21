# Fotografías de Cargoban

Aquí van las fotos propias de la operación. Mientras esta carpeta esté vacía, el sitio
usa fondos de marca (azul profundo con la textura del símbolo), que se ven terminados
pero no cuentan lo que Cargoban hace.

## Qué se necesita, por orden de importancia

1. **Portada (1 foto, horizontal, apaisada).** Plano amplio de operación: muelle con grúa,
   buque atracado, patio de contenedores. Con aire arriba y a la derecha para que el
   titular no tape nada importante. Mínimo 2400 px de ancho.
2. **Servicios (4 fotos, verticales o cuadradas).** Una por frente de operación:
   portuaria, extraportuaria, almacenamiento y equipos.
3. **Nosotros (2 o 3 fotos).** Gente trabajando. Rostros, manos, maquinaria en uso.
   Valen fotos antiguas: los 50 años de historia son un activo.
4. **Tipos de carga (hasta 8 fotos).** Refrigerados, congelados, perecederos, sacos,
   proyectos, maquinaria, vehículos y granel.

## Cómo entregarlas

- Formato original (JPG o PNG), sin comprimir ni redimensionar. Astro optimiza al compilar.
- Nombres sin tildes ni espacios: `muelle-grua.jpg`, `patio-contenedores.jpg`.
- Si una foto tiene personas identificables, confirmar que Cargoban tiene permiso de uso.

## Cómo se conectan al sitio

Una vez estén aquí, se referencian desde `src/data/sitio.ts` y desde
`src/components/Hero.astro` (variable `foto`). No hace falta tocar el diseño.

## Criterio

Fotos propias siempre por encima de banco de imágenes. Una empresa con 50 años de
operación tiene el mejor material posible: el suyo. Las fotos de stock de contenedores
genéricos son intercambiables y restan credibilidad.
