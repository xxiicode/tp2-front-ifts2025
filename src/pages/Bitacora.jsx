import { AccordionItem } from '../components/Accordion'
import { Timeline } from '../components/Timeline'

const bitacoraEntries = [
  { 
    id: 1, 
    date: 'Semana 1', 
    title: 'Inicio del Proyecto', 
    content: `
      Nos reunimos para revisar la consigna del TP2 y definir la estrategia. 
      Decidimos cambiar la estética del TP1 por una retro gamer y convertir el sitio en una SPA con React. 
      Configuramos el entorno con Vite, instalamos React Router y planificamos la estructura de carpetas.`
  },
  { 
    id: 2, 
    date: 'Semana 2', 
    title: 'Estructura y Componentes Base', 
    content: `
      Creamos los componentes principales: Sidebar, Home, Bitácora, y TeamCard. 
      Se incorporó el sistema de rutas con React Router para navegar sin recargar la página. 
      También se definieron los estilos base y paleta de colores.`
  },
  { 
    id: 3, 
    date: 'Semana 3', 
    title: 'Integración de Datos Locales y API', 
    content: `
      Agregamos el archivo datos.json con la información de los integrantes y una sección dinámica que los renderiza.
      Se implementó la conexión con la API pública de Pokémon (PokeAPI) para mostrar datos externos.
      Ajustamos las tarjetas para adaptarse a distintos tamaños de pantalla.`
  },
  { 
    id: 4, 
    date: 'Semana 4', 
    title: 'Pulido Visual y Responsividad', 
    content: `
      Mejoramos los estilos del Sidebar y del resto de la interfaz para garantizar una visualización fluida en móvil, tablet y escritorio.
      Se optimizaron imágenes y rutas, y se realizaron pruebas de usabilidad.`
  },
  { 
    id: 5, 
    date: 'Semana 5', 
    title: 'Documentación y Diagramas', 
    content: `
      Elaboramos los diagramas solicitados: Árbol de Renderizado y Organización de Carpetas.
      Ambos fueron realizados en draw.io y exportados como PNG para incluir en la entrega.
      También se completó el archivo README con los links a GitHub y Vercel.`
  },
  { 
    id: 6, 
    date: 'Semana 6', 
    title: 'Entrega Final y Presentación', 
    content: `
      Verificamos los últimos detalles, subimos la versión final a Vercel y revisamos los commits del repositorio.
      La aplicación se encuentra funcional, responsiva y publicada.`
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
    date: '28/09/25',
    title: 'Componentización',
    content: 'Creación del Sidebar, Home y componentes reutilizables.'
  },
  {
    id: 4,
    date: '05/10/25',
    title: 'Datos Locales y API',
    content: 'Implementación del archivo JSON y consumo de la PokeAPI.'
  },
  {
    id: 3,
    date: '10/10/25',
    title: 'Diseño Responsivo',
    content: 'Ajustes visuales y pruebas en diferentes dispositivos.'
  },
  {
    id: 2,
    date: '15/10/25',
    title: 'Diagramas y README',
    content: 'Creación del Árbol de Renderizado, estructura de carpetas y documentación.'
  },
  {
    id: 1,
    date: '20/10/25',
    title: 'Entrega Final',
    content: 'Deploy en Vercel y subida del proyecto al repositorio de GitHub.'
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
