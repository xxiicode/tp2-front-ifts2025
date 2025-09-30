import TeamCard from "../components/TeamCard";
import avatarMartin from "../assets/imgs/card-martin.webp"; // tu imagen

const MartinPage = () => {
  return (
    <>
      <TeamCard
        nombre="Martín"
        ubicacion="AMBA"
        edad={39}
        habilidades={["HTML", "Python", "Photoshop", "Trabajo en equipo"]}
        peliculas={["Matrix", "Back to the Future", "Avengers", "Interestelar"]}
        musica={["Red Hot Chillie Peppers", "Ramones", "Attaque 77"]}
        imagen={avatarMartin}
        initialCoins={5}
      />
    </>
  );
};

export default MartinPage;
