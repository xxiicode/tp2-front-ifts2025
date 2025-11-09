import { AccordionItem } from '../components/Accordion'
import { Timeline } from '../components/Timeline'

const bitacoraEntries = [
  { 
    id: 1, 
    date: 'Semana 1', 
    title: 'Inicio del Proyecto y Planificación General', 
    content: `
      En esta primera semana realizamos una reunión de planificación para analizar la consigna del TP2 y definir los objetivos del trabajo.
      Decidimos migrar completamente el sitio desarrollado en el TP1 a **React**, utilizando **Vite** para optimizar el entorno de desarrollo y lograr una estructura más modular. 
      
      También acordamos la **nueva identidad visual** del proyecto: una estética **retro gamer**, inspirada en la era de los 8 bits (NES y Game Boy). 
      Se eligió una paleta de colores basada en tonos neón (azul, magenta y dorado) y una tipografía pixelada que remite a los clásicos juegos de los 80s.
      
      Finalmente, planificamos la estructura de carpetas y la arquitectura general de la aplicación, priorizando componentes reutilizables, separación lógica por vistas (*pages*) y un sistema de navegación con **React Router DOM**.`
  },
  { 
    id: 2, 
    date: 'Semana 2', 
    title: 'Diseño de Estructura y Componentes Base', 
    content: `
      Comenzamos la implementación del proyecto creando los primeros componentes base: **Sidebar**, **Home**, **Bitácora** y **TeamCard**.
      Se implementó la navegación interna con **React Router**, configurando rutas limpias y descriptivas como */home*, */bitacora*, */integrantes* y */nesgames*.

      En esta etapa se diseñó el layout principal, con una barra lateral fija (Sidebar) que permite moverse entre secciones sin recargar la página.
      Además, definimos los estilos globales en CSS, incluyendo fondos gradientes, sombreados suaves y transiciones al estilo CRT (televisores antiguos).
      
      Se comenzó a experimentar con **Framer Motion** y **Animate.css** para aplicar animaciones sutiles en los títulos y tarjetas.`
  },
  { 
    id: 3, 
    date: 'Semana 3', 
    title: 'Integración de Datos Locales y API Pública', 
    content: `
      En esta semana implementamos la lectura de datos desde **JSON locales** y también la conexión a una **API pública externa**.
      Creamos el archivo **datos.json**, donde definimos la información de los integrantes (nombre, rol, hobbies, gustos y redes sociales) para ser renderizada dinámicamente en el componente **Integrantes**.
      
      Además, incorporamos la **PokéAPI**, creando una nueva sección llamada **PokeTeam**, donde los usuarios pueden ver un equipo Pokémon. 
      Se agregaron funciones para mostrar seis Pokémon fijos seleccionados por el usuario y dos aleatorios adicionales. 
      Implementamos también un sistema de **persistencia con localStorage**, para que el equipo y el estado se mantengan aunque se recargue el navegador.
      
      Esta parte del trabajo nos permitió practicar el uso de *hooks* como **useEffect**, **useState** y el manejo de *fetch API*.`
  },
  { 
    id: 4, 
    date: 'Semana 4', 
    title: 'Nuevas Funcionalidades, Filtros y Animaciones Avanzadas', 
    content: `
      Se avanzó en la implementación de la sección **Juegos NES**, conectando un archivo local **nesgames.json** con un listado de 20 títulos clásicos.
      Los juegos se muestran en tarjetas dinámicas con su imagen, año, género y botón de acceso. 
      Se agregaron funciones de **búsqueda por texto** y **filtro por género**, junto con animaciones de entrada y hover.

      Además, se incorporó una **galería interactiva** mediante *yet-another-react-lightbox*, con soporte de **zoom y navegación entre imágenes**.
      Esta galería permite visualizar las carátulas de los juegos en tamaño completo, generando una experiencia más inmersiva y visualmente atractiva.

      En cuanto al diseño, se pulieron las transiciones, se ajustaron las animaciones de scroll y se mejoró la compatibilidad responsiva con pantallas pequeñas.`
  },
  { 
    id: 5, 
    date: 'Semana 5', 
    title: 'Emulador NES, Interactividad y Detalles Visuales', 
    content: `
      Esta semana se incorporó una de las mejoras más importantes del proyecto: el **emulador Nostalgist.js**.
      Gracias a esta librería, los usuarios pueden **jugar ROMs de NES directamente desde el navegador**, sin instalar nada adicional.
      
      Se desarrolló un nuevo componente llamado **JugarNes.jsx**, que carga dinámicamente el juego según su ID. 
      Se añadieron controles de teclado y la posibilidad de **cerrar el emulador presionando la tecla ESC**, lo que mejora la experiencia de usuario.
      
      También se mejoró la interactividad general: 
      - Los títulos de los juegos ahora se destacan visualmente cuando son clickeables.  
      - Se añadieron cursores personalizados tipo “retro” y efectos de resplandor neón.  
      - Se ajustaron los tiempos de animación de entrada para optimizar el rendimiento.
      
      Esta etapa implicó pruebas con distintos ROMs (.nes) y ajustes en la carga de archivos desde la carpeta */public/roms/*.`
  },
  { 
    id: 6, 
    date: 'Semana 6', 
    title: 'Documentación, Optimización y Entrega Final', 
    content: `
      En la última semana nos enfocamos en la **documentación completa del proyecto** y en los últimos retoques visuales y funcionales. 
      
      Se actualizaron los diagramas de **Árbol de Renderizado** y **Organización de Carpetas** utilizando *draw.io*, mostrando las relaciones entre componentes y vistas. 
      Se optimizó el código eliminando redundancias, mejorando los nombres de variables y separando la lógica de presentación.
      
      El archivo **README.md** fue completamente reescrito para reflejar las mejoras, nuevas dependencias y características agregadas (API externa, emulador, lightbox, animaciones y estilos retro). 
      Por último, realizamos el **deploy final en Vercel**, probando la aplicación en distintos dispositivos para garantizar una experiencia fluida y responsiva.

      Con esto, el proyecto quedó completamente funcional, atractivo visualmente y alineado con los objetivos propuestos al inicio.`
  },
]

const timelineEntries = [
  {
    id: 6,
    date: '22/09/25',
    title: 'Inicio del TP2',
    content: 'Revisión de la consigna, configuración del entorno React con Vite y planificación general.'
  },
  {
    id: 5,
    date: '30/09/25',
    title: 'Componentización',
    content: 'Creación de los primeros componentes base (Home, Sidebar, TeamCard) y estructura de rutas con React Router.'
  },
  {
    id: 4,
    date: '06/10/25',
    title: 'Datos Locales y API Pública',
    content: 'Implementación de datos desde JSON y consumo de la PokéAPI con paginación y almacenamiento local.'
  },
  {
    id: 3,
    date: '13/10/25',
    title: 'Animaciones y Galería NES',
    content: 'Uso de Framer Motion y Lightbox para efectos visuales y visualización ampliada de juegos NES.'
  },
  {
    id: 2,
    date: '20/10/25',
    title: 'Emulador NES',
    content: 'Integración de Nostalgist.js con carga dinámica de ROMs y controles personalizados.'
  },
  {
    id: 1,
    date: '27/10/25',
    title: 'Entrega Final y Deploy',
    content: 'Documentación, optimización del código y publicación del proyecto en Vercel.'
  },
]

export default function BitacoraPage () {
  return (
    <main style={{ background: '#48aaf9', padding: '20px' }}>
      <h1 className="title">Bitácora del Proyecto</h1>
      <p style={{ marginBottom: '20px', fontStyle: 'italic', color: '#fff' }}>
        Registro de avances, decisiones técnicas, aprendizajes y mejoras implementadas durante el desarrollo del TP2.
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
