# ReactAcademy — Taller 04

La landing del Taller 03 dividida en varias vistas con **React Router**, cada
una con su propia URL (Semana 9: Rutas y Navegación).

## Rutas

| Ruta        | Qué muestra                                  |
| ----------- | -------------------------------------------- |
| `/`         | Vista principal (Hero + contador)            |
| `/cursos`   | Sección de cursos                            |
| `/nosotros` | Sección de nosotros                          |
| `/login`    | Formulario de ingreso (solo interfaz)        |
| `*`         | Página 404 para cualquier URL que no existe  |

El `<Navbar />` se muestra en todas las rutas y navega con `NavLink`
(resalta la ruta activa). Los demás enlaces internos usan `Link`;
no hay ningún `<a href>`.

## La ruta `/login`

- El botón está deshabilitado mientras el correo o la contraseña estén vacíos.
- Al enviar, los campos y el botón se deshabilitan.
- No hay backend ni usuario real: el microcopy lo aclara.

## Estructura

- `src/main.jsx` — envuelve la app en `BrowserRouter`.
- `src/App.jsx` — `Routes` y `Route`, con `Navbar` y `Footer` fijos.
- `src/views/` — una vista por archivo: `Home`, `Courses`, `About`, `Login`,
  `NotFound`.
- `src/components/` — `Navbar`, `Hero`, `Counter`, `CoursesSection`,
  `CourseCard`, `Badge`, `AboutSection`, `LoginForm`, `Footer`.
- `src/data/courses.js` — datos de los cursos.

## Cómo correrlo

```bash
npm install
npm run dev
```
