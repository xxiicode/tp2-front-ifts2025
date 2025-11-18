import useSound from 'use-sound'

import boopSfx from '../assets/sounds/smb_coin.wav'

export const SoundBtn = () => {
  const [play] = useSound(boopSfx)
  return <button onClick={play}>Boop!</button>
}