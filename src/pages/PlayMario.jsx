import { Nostalgist } from 'nostalgist'
import { useCallback } from 'react'
import '../css/jugarMario.css'

export default function JugarMario () {
  const launchGame = useCallback(async () => {
    await Nostalgist.nes('/roms/smb.nes')
  }, [])

  return (
    <div className="container">
      <button onClick={launchGame}>Jugar Super Mario</button>
    </div>
  )
}