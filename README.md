# TP2 – Proyecto React en Equipo

## Descripción General
Este proyecto corresponde a la **segunda etapa del sitio del TP1**, migrado completamente a **React**.  
En esta versión, se implementa una **Single Page Application (SPA)** con navegación interna mediante **React Router**, componentes reutilizables y secciones dinámicas que combinan **datos locales (JSON)** y **API externas**.

El sitio adopta una estética **retro gamer**, inspirada en la era de los **8 bits**, con animaciones suaves y elementos interactivos que evocan los clásicos videojuegos de los 80s y 90s.

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
| **Home** | Portada del sitio con presentación del grupo, animaciones de entrada con *Framer Motion* y tarjetas hover interactivas de los integrantes. |
| **Bitácora** | Registro semanal del avance del proyecto con acordeones y línea de tiempo animada. |
| **Integrantes** | Fichas individuales que leen datos dinámicos desde `datos.json`, incluyendo secciones como habilidades, películas y música favorita. |
| **Juegos NES (JSON Local)** | Sección que carga `nesgames.json` con 20 juegos clásicos de Nintendo. Incluye **búsqueda por texto**, **filtros por género** y una **galería interactiva con lightbox y zoom**. |
| **Emulador NES (Nostalgist.js)** | Nueva funcionalidad que permite **jugar directamente desde el navegador**. Cada juego del catálogo puede cargar su propia ROM desde `/public/roms`. |
| **PokeTeam (API Pública)** | Sección que consume la **PokeAPI**. Los Pokémon se muestran con tarjetas dinámicas, imágenes alternando entre versión normal y shiny, y paginación controlada. |
| **Diagramas** | Incluye el **Árbol de Renderizado** y la **Estructura de Carpetas**, realizados en *draw.io*. |

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