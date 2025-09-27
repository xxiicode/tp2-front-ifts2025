import CoinBoton from "../components/Button";
import TeamCard from "../components/TeamCard";

const LeanPage = () => {
  return (
    <>
      <TeamCard
        nombre="Lean"
        ubicacion="Camarones"
        edad={38}
        initialCoins={22}
      />
    </>
  );
};

export default LeanPage;
