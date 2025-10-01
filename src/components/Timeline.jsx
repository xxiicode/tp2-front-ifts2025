import '../css/bitacora.css'

// Un ítem de la línea de tiempo
export const TimelineItem = ({ date, title, content }) => {
  return (
    <div className="timeline-item" data-date={date}>
      <div className="timeline-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

// El contenedor general
export const Timeline = ({ items }) => {
  return (
    <section className="timeline-section">
      <h2 className="titulo-principal">Línea de Tiempo del Proyecto</h2>
      <div className="timeline-container">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            date={item.date}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </section>
  )
}
