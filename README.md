# Campamento Jovenes 2026 — App de prueba

PWA de ejemplo para validar la idea antes de cargar los datos reales del
campamento. Incluye datos de muestra (ficticios) en `src/data/` para que
puedas ver la app funcionando de principio a fin.

## Como arrancarla en tu PC (Windows + CMD)

```
cd campamento-jovenes-2026
npm install
npm run dev
```

Se abrira en `http://localhost:5173`. Para verla en el movil dentro de la
misma red wifi, usa `npm run dev -- --host` y entra desde el movil a la IP
que te indique la terminal.

## Como probar que funciona offline de verdad

El modo offline solo se activa con la build de produccion (con `npm run dev`
el service worker no cachea igual). Para probarlo tal cual funcionaria en
el campamento:

```
npm run build
npm run preview
```

Abre la URL que te de `npm run preview`, espera unos segundos a que cargue
del todo (para que el service worker descargue y guarde todo en cache), y
luego corta el wifi o pon el movil en modo avion. La app deberia seguir
funcionando igual.

## Estructura del proyecto

```
src/
  data/         <- Aqui van todos los datos (horario, grupos, actividades,
                   oraciones, lecturas, canciones). De momento son de EJEMPLO.
  components/
    Navbar.jsx  <- Barra de navegacion inferior
  pages/
    Inicio.jsx
    Horario.jsx
    Actividades.jsx
    Grupos.jsx
    Oracion.jsx      <- Laudes, Completas y Lecturas del dia
    Cancionero.jsx
```

## Pendiente para la version definitiva

- Sustituir `src/data/horario.js` por el horario real y completo
- Sustituir `src/data/grupos.js` por los grupos y nombres reales
- Sustituir `src/data/actividades.js` por las actividades reales
- Poner los textos oficiales de Laudes y Completas en `src/data/oraciones.js`
- Ir subiendo cada dia las lecturas reales en `src/data/lecturas.js`
  (formato de fecha `AAAA-MM-DD`)
- Pasar las 42 canciones del cancionero a `src/data/canciones.js`
- Calcular el "dia actual" en `Inicio.jsx` a partir de la fecha real en vez
  de mostrar siempre el dia 1
- Generar unos iconos definitivos a partir del logo real (los actuales son
  un placeholder generado automaticamente con los colores del logo)

## Importante: primera apertura con internet

Para que el modo offline funcione en el camping, cada movil tiene que abrir
la app **una vez con conexion** (antes de salir, o en el ultimo sitio con
cobertura) para que el service worker descargue y cachee todo. A partir de
ahi, funciona sin red.
