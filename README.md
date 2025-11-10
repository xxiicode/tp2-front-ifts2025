# TP2 – Proyecto React en Equipo

## Descripción General
Este proyecto corresponde a la segunda etapa del sitio desarrollado en el TP1, completamente migrado y optimizado en React.
En esta versión se implementa una Single Page Application (SPA) con navegación dinámica mediante React Router, componentes reutilizables y secciones interactivas que integran tanto datos locales (JSON) como consumo de APIs externas.

El sitio ofrece una experiencia inmersiva con una estética retro gamer inspirada en los videojuegos de los años 80 y 90, utilizando animaciones suaves, efectos de neón y tipografía pixelada.
Entre sus funcionalidades destacan una galería de juegos clásicos de NES, un emulador funcional basado en Nostalgist.js que permite jugar directamente en el navegador, y una sección de Pokémon dinámica que combina datos locales con información obtenida desde la PokéAPI.

Esta versión refuerza el enfoque en la interactividad, la organización modular del código y la coherencia visual, consolidando un sitio más ágil, moderno y con una clara identidad retro.

---

## Integrantes
- **Martín Giménez Gaitán**
- **Leandro Bilokapic**

---

## Links de Entrega
- **Repositorio GitHub:** [https://github.com/xxiicode/tp2-front-ifts2025](https://github.com/xxiicode/tp2-front-ifts2025)  
- **Sitio en Vercel:** [https://tp2-front-g19.vercel.app/](https://tp2-front-g19.vercel.app/)

---

## Secciones del Proyecto

| Sección | Descripción |
|----------|-------------|
| **Home**                             | Pantalla de bienvenida con presentación del grupo, animaciones de entrada fluidas creadas con *Framer Motion* y tarjetas interactivas con efecto *hover*. Define la identidad retro del sitio, con colores neón y tipografía pixelada. |
| **Bitácora**                         | Registro cronológico del proceso de desarrollo, presentado mediante **acordeones dinámicos** y una **línea de tiempo animada**. Cada semana documenta decisiones técnicas, avances y aprendizajes del equipo. |
| **Integrantes**                      | Muestra fichas individuales generadas a partir de un archivo `datos.json`. Cada tarjeta incluye información dinámica sobre los integrantes, como habilidades, intereses y secciones personalizadas (películas, música, etc.). |
| **Juegos NES (JSON Local)**          | Galería de juegos clásicos obtenidos desde `nesgames.json`, con **búsqueda por título**, **filtros por género** y **paginación dinámica** que muestra 20 juegos por página. Además, incluye una **galería interactiva con Lightbox y zoom** para visualizar las portadas en detalle. |
| **Emulador NES (Nostalgist.js)**     | Permite **jugar directamente en el navegador** los títulos listados en el catálogo NES. Cada juego carga su propia ROM desde `/public/roms`. Se incluye soporte para **teclado**, opción de **salir con la tecla ESC** y control de compatibilidad con dispositivos móviles. |
| **PokeTeam (API Pública – PokéAPI)** | Sección que consume la **PokéAPI** para mostrar equipos Pokémon de manera dinámica. La primera página muestra el **equipo principal definido en `pokemonTeam.json`**, mientras que las siguientes generan **equipos aleatorios**. Las tarjetas alternan entre **sprites normales y shiny**, con **caché persistente en localStorage** y navegación por páginas. |
| **Diagramas**                        | Contiene los **diagramas de Árbol de Renderizado y Estructura de Carpetas**, realizados en *draw.io*, que representan la jerarquía de componentes y la organización modular del proyecto. |

---

## Mejoras Implementadas

| Mejora | Descripción |
|---------|--------------|
| **Animaciones suaves** | Transiciones de carga y hover en tarjetas usando *Framer Motion* y *Animate.css*. |
| **Buscador y filtros dinámicos** | Búsqueda en `nesgames.json` y filtrado por género mediante `select`. |
| **Gestión avanzada de Pokémon** | Integración con la PokéAPI para mostrar 8 Pokémon por página: 6 fijos elegidos por el usuario y 2 aleatorios. Se implementó caché persistente con localStorage para mantener el equipo y el estado incluso tras recargar o cerrar el navegador. |
| **Galería interactiva** | Implementada con *yet-another-react-lightbox*, con zoom y navegación entre imágenes. |
| **Emulador NES dinámico** | Usa *Nostalgist.js* para cargar ROMs según el juego seleccionado (`/juego/:id`). |

## Links de los videos
- **Google Drive:** [https://drive.google.com/drive/folders/1hdbXXoh-dtA7g9b8_VcRQ-TS1J-pa0EN?usp=drive_link](https://drive.google.com/drive/folders/1hdbXXoh-dtA7g9b8_VcRQ-TS1J-pa0EN?usp=drive_link)

---

## Tecnologías Utilizadas
- **React + Vite**
- **React Router DOM**
- **Framer Motion + Animate.css**
- **CSS3 (Responsive / Retro Style)**
- **JSON Local + API Fetch**
- **Nostalgist.js** (Emulación NES)
- **Vercel** (Deploy)

---

## Estructura Visual

### Árbol de Renderizado
![Árbol de Renderizado](./src/assets/diagrams/Árbol%20de%20Renderizado.png)

### Organización de Carpetas
![Organización de Carpetas](./src/assets/diagrams/Diagrama%20de%20Organización%20de%20Carpetas.png)

---

## Notas Técnicas
- Los componentes siguen **PascalCase**.
- Las rutas usan nombres en inglés (`/nesgames`, `/bitacora`, `/game/:id`), pero los contenidos están en español.
- `App.jsx` define toda la navegación principal.
- `main.jsx` funciona como punto de entrada.
- El proyecto mantiene una **coherencia estética retro**, con fuentes pixeladas, colores neón y efectos de transición suaves.

---

## Créditos
> Desarrollado por **Martín Giménez Gaitán** y **Leandro Bilokapic**  
> para el espacio curricular **Front-End – IFTS 2025**
