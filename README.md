# TP2 – Proyecto React en Equipo

## Descripción General
Este proyecto es la segunda etapa del sitio desarrollado en el TP1.  
En esta versión migramos el proyecto a **React**, convirtiéndolo en una **Single Page Application (SPA)** con navegación interna mediante **React Router**, componentes reutilizables y nuevas secciones dinámicas con datos locales y externos.

El diseño ahora tiene una estética **retro gamer**, inspirada en los juegos clásicos de los 80s y 90s.

---

## 👥 Integrantes
- **Martín Giménez Gaitán**
- **Leandro Bilokapic**

---

## 🌐 Links de Entrega
- 🔗 **Repositorio GitHub:** [ ]( )
- 🚀 **Sitio en Vercel:** [ ]( )

---

## 🧩 Secciones del Proyecto

| Sección | Descripción |
|----------|-------------|
| 🏠 **Home** | Portada del sitio con presentación del grupo y tarjetas de integrantes. |
| 📖 **Bitácora** | Registro semanal del avance del proyecto, con un sistema de acordeón y línea de tiempo. |
| 👤 **Integrantes** | Fichas individuales con información dinámica proveniente de `datos.json`. |
| 🎮 **Juegos NES (JSON local)** | Nueva sección que lee `nesgames.json` con 20 juegos clásicos y los muestra en tarjetas dinámicas. |
| 🐉 **PokeTeam (API Pública)** | Sección que consume la API pública **PokeAPI** y muestra Pokémon en formato de tarjetas. |
| 📚 **Diagramas** | Incluye el **Árbol de Renderizado** y la **Estructura de Carpetas**, realizados en draw.io. |

---

## ⚙️ Tecnologías Utilizadas
- **React + Vite**
- **React Router DOM**
- **JavaScript (ES6+)**
- **CSS3 (Responsive Design)**
- **JSON Local + API Fetch**
- **Vercel** (Deploy)

---

### 🌳 Árbol de Renderizado
![Árbol de Renderizado](./src/assets/diagrams/Árbol%20de%20Renderizado.png)

### 🗂️ Organización de Carpetas
![Organización de Carpetas](./src/assets/diagrams/Diagrama%20de%20Organización%20de%20Carpetas.png)

---

## 🧠 Notas Técnicas
- Todos los componentes están nombrados en **PascalCase**.
- Las rutas se definen en inglés (`/nesgames`, `/bitacora`, etc.), pero los componentes están en **español**.
- `App.jsx` contiene la estructura principal de la SPA.
- `main.jsx` es el punto de entrada del proyecto.
