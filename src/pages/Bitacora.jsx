import { AccordionItem } from '../components/Accordion'
import { Timeline } from '../components/Timeline'

const bitacoraEntries = [
  { id: 1, date: 'Semana 1', title: 'Inicio del Proyecto', content: 'Detalles de la semana 1' },
  { id: 2, date: 'Semana 2', title: 'Construyendo el Mundo', content: 'Detalles de la semana 2' },
  { id: 3, date: 'Semana 3', title: 'Poblando el Universo', content: 'Detalles de la semana 3' },
  { id: 4, date: 'Semana 4', title: 'El Pulido Final', content: 'Detalles de la semana 4' },
]

const timelineEntries = [
  {
    id: 1,
    date: '01/09/25',
    title: '🚀 Inicio del Proyecto',
    content: 'Lanzamiento del TP1 y formación del equipo Grupo 11.',
  },
  {
    id: 2,
    date: '05/09/25',
    title: '🎨 Concepto Creativo',
    content: 'Definición del concepto "multiverso digital retro-futurista".',
  },
  {
    id: 3,
    date: '12/09/25',
    title: '⚡ Desarrollo Activo',
    content: 'Implementación de estilos individuales y funcionalidades JS.',
  },
  {
    id: 4,
    date: '22/09/25',
    title: '✅ Entrega Final',
    content: 'Deploy en Vercel y entrega del proyecto completado.',
  },
]

export default function BitacoraPage () {
  return (
    <>
      <main style={{ background: '#48aaf9', padding: '20px' }}>
        <h1 className="title">Bitacora</h1>

        {bitacoraEntries.map((entry) => (
          <AccordionItem
            key={entry.id}
            id={entry.id}
            title={`${entry.date} - ${entry.title}`}
          >
            <p>{entry.content}</p>
          </AccordionItem>
        ))}

        <section>
          <Timeline items={timelineEntries} />
        </section>
      </main>

    </>
  )
}
