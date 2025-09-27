import React, { useState } from "react";

const CoinBoton = ({ initialCoins }) => {
  const [coins, setCoins] = useState(initialCoins || 0);

  return (
    <button onClick={() => setCoins(coins + 1)} className="coin-btn">
      {coins}
    </button>
  );
};

export default CoinBoton;
