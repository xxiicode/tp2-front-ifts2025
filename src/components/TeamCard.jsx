const TeamCard = ({
  nombre,
  ubicacion,
  edad,
  habilidades,
  peliculas,
  musica,
  imagen,
}) => {
  return (
    <article className="team-card">
      <div className="team-card-avatar">
        <img
          src={imagen || "img-placeholder.png"}
          alt={`Avatar de ${nombre}`}
        />
      </div>
      <div className="team-card-info">
        <p>
          <span className="lbl">Nombre</span>
          <span className="val">{nombre}</span>
        </p>
        <p>
          <span className="lbl">Ubicación</span>{" "}
          <span className="val">{ubicacion}</span>
        </p>
        <p>
          <span className="lbl">Edad</span> <span className="val">{edad}</span>
        </p>
      </div>
    </article>
  );
};

export default TeamCard;
