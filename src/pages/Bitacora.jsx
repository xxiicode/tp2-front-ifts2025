import "../css/Bitacora.css";

const Bitacora = () => {
  // Ejemplo de entradas de bitácora
  const entradas = [
    { fecha: "2025-09-01", titulo: "Inicio del proyecto", descripcion: "Se definió el alcance del TP2 y se organizó el equipo." },
    { fecha: "2025-09-05", titulo: "Diseño de la portada", descripcion: "Se crearon las secciones principales y el diseño del hero." },
    { fecha: "2025-09-10", titulo: "Sidebar y rutas", descripcion: "Se implementó el aside y las rutas para cada sección." },
  ];

  return (
    <main className="bitacora-page">
      <h1>Bitácora del Proyecto</h1>
      <div className="bitacora-list">
        {entradas.map((entrada, index) => (
          <article key={index} className="entrada">
            <h2>{entrada.titulo}</h2>
            <span className="fecha">{entrada.fecha}</span>
            <p>{entrada.descripcion}</p>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Bitacora;
