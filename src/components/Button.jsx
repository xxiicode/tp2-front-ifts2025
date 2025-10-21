import React, { useState, useEffect } from 'react'
import coinImg from '../assets/imgs/coin.png'

const CoinBoton = ({ player, initialCoins }) => {
  const [coins, setCoins] = useState(() => {
    const saved = localStorage.getItem(`coins-${player}`)
    return saved ? JSON.parse(saved) : initialCoins || 0
  })

  useEffect(() => {
    localStorage.setItem(`coins-${player}`, JSON.stringify(coins))
  }, [coins, player])

  const handleClick = () => {
    setCoins(coins + 1)
    new Audio('/src/assets/sounds/smb_coin.wav').play()
  }

  return (
    <button onClick={handleClick} className="coin-btn">
      <img
        src={coinImg}
        alt="Coin"
        className="coin-icon"
      />
      <span className="coin-count">× {coins}</span>
    </button>
  )
}

export default CoinBoton
