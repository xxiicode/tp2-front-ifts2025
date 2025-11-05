import { AccordionItem } from '../components/Accordion'
import { Timeline } from '../components/Timeline'

const bitacoraEntries = [
  { 
    id: 1, 
    date: 'Semana 1', 
    title: 'Inicio del Proyecto', 
    content: `
      Nos reunimos para revisar la consigna del TP2 y definir la estrategia general. 
      Decidimos migrar el proyecto del TP1 a React, adoptando una estética retro gamer basada en los juegos clásicos de los 80s. 
      Configuramos el entorno con Vite, instalamos React Router y planificamos la estructura de carpetas y componentes base.`
  },
  { 
    id: 2, 
    date: 'Semana 2', 
    title: 'Estructura y Componentes Base', 
    content: `
      Creamos los componentes principales: Sidebar, Home, Bitácora y TeamCard. 
      Implementamos la navegación interna mediante React Router, asegurando que la aplicación funcione como una SPA. 
      Se definieron los estilos base, tipografía pixelada y paleta de colores inspirada en consolas 8-bit.`
  },
  { 
    id: 3, 
    date: 'Semana 3', 
    title: 'Integración de Datos Locales y API Pública', 
    content: `
      Agregamos el archivo datos.json con la información de los integrantes y una sección dinámica que los renderiza. 
      Integramos la API pública de Pokémon (PokeAPI) para mostrar un equipo Pokémon con sprites normales y shiny. 
      Se implementó paginación y selección aleatoria de Pokémon.`
  },
  { 
    id: 4, 
    date: 'Semana 4', 
    title: 'Nuevas Funcionalidades y Animaciones', 
    content: `
      Se incorporaron animaciones con Framer Motion y efectos hover suaves usando Animate.css. 
      Se creó la sección de Juegos NES con datos cargados desde un JSON local y se implementó un buscador y filtros por género. 
      Además, se desarrolló una galería interactiva con Lightbox y soporte de zoom.`
  },
  { 
    id: 5, 
    date: 'Semana 5', 
    title: 'Emulador NES y Mejoras Visuales', 
    content: `
      Implementamos el emulador Nostalgist.js para permitir jugar ROMs de NES directamente desde el navegador. 
      El componente JugarNes.jsx permite ejecutar distintos juegos del catálogo en función de su ID. 
      Se agregaron animaciones, cursor interactivo y estilos de neón para los enlaces clickeables. `
  },
  { 
    id: 6, 
    date: 'Semana 6', 
    title: 'Documentación, Diagramas y Deploy Final', 
    content: `
      Se actualizaron los diagramas de Árbol de Renderizado y Organización de Carpetas en draw.io. 
      Se completó el README con las nuevas secciones, tecnologías y mejoras. 
      Finalmente, se subió la versión definitiva del proyecto a Vercel y se verificó el correcto funcionamiento de todas las rutas.`
  },
]

const timelineEntries = [
  {
    id: 6,
    date: '22/09/25',
    title: 'Inicio del TP2',
    content: 'Revisión de la consigna y armado del entorno React con Vite.'
  },
  {
    id: 5,
    date: '30/09/25',
    title: 'Componentización',
    content: 'Creación de componentes base: Sidebar, Home y TeamCard.'
  },
  {
    id: 4,
    date: '06/10/25',
    title: 'Datos Locales y API',
    content: 'Integración de datos JSON y consumo de la PokeAPI.'
  },
  {
    id: 3,
    date: '13/10/25',
    title: 'Animaciones y Galería NES',
    content: 'Búsqueda, filtrado y efectos con Framer Motion y Lightbox.'
  },
  {
    id: 2,
    date: '20/10/25',
    title: 'Emulador NES',
    content: 'Implementación de Nostalgist.js con ROMs y enlaces dinámicos.'
  },
  {
    id: 1,
    date: '27/10/25',
    title: 'Entrega Final',
    content: 'Documentación, diagramas y deploy en Vercel.'
  },
]

export default function BitacoraPage () {
  return (
    <main style={{ background: '#48aaf9', padding: '20px' }}>
      <h1 className="title">Bitácora del Proyecto</h1>
      <p style={{ marginBottom: '20px', fontStyle: 'italic', color: '#fff' }}>
        Registro de avances, decisiones y aprendizajes del equipo durante el desarrollo del TP2.
      </p>

      {bitacoraEntries.map((entry) => (
        <AccordionItem
          key={entry.id}
          id={entry.id}
          title={`${entry.date} - ${entry.title}`}
        >
          <p>{entry.content}</p>
        </AccordionItem>
      ))}

      <section style={{ marginTop: '40px' }}>
        <h2 className="subtitle">Línea de Tiempo</h2>
        <Timeline items={timelineEntries} />
      </section>
    </main>
  )
}
