import React, { useState, useEffect } from 'react'
import { playSound } from '../utils/sound'

const CoinBoton = ({ player, initialCoins }) => {
  const [coins, setCoins] = useState(() => {
    const saved = localStorage.getItem(`coins-${player}`)
    return saved ? JSON.parse(saved) : initialCoins || 0
  })

  useEffect(() => {
    localStorage.setItem(`coins-${player}`, JSON.stringify(coins))
  }, [coins, player])

  return (
    <button
      onClick={() => {
        setCoins(coins + 1)
        playSound('src/assets/sounds/coin.mp3')
      }}
      className="coin-btn"
    >
      {coins}
    </button>
  )
}

export default CoinBoton
