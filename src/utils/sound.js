export function isSoundEnabled() {
  try {
    const value = localStorage.getItem('sound-enabled')
    return value !== 'false'
  } catch (_) {
    return true
  }
}

export function setSoundEnabled(enabled) {
  try {
    localStorage.setItem('sound-enabled', enabled ? 'true' : 'false')
  } catch (_) {}
}

export function playSound(path) {
  if (!isSoundEnabled()) return
  try {
    const audio = new Audio(path)
    audio.volume = 0.6
    audio.play().catch(() => {})
  } catch (_) {
    // Silenciar errores si el archivo no existe o el autoplay está bloqueado
  }
}




