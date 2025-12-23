import DinoGame from './game/DinoGame.js'

// Responsive Canvas-Größe für alle Geräte
function getGameDimensions() {
  const width = Math.min(window.innerWidth, 800)
  const height = Math.min(window.innerHeight, 270)
  return { width, height }
}

const { width, height } = getGameDimensions()
const game = new DinoGame(width, height)
const isTouchDevice =
  'ontouchstart' in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0

if (isTouchDevice) {
  let touchTimer = null
  const LONG_PRESS_DURATION = 200 // ms für langen Touch

  document.addEventListener('touchstart', (e) => {
    e.preventDefault()
    
    // Timer für langen Touch starten
    touchTimer = setTimeout(() => {
      game.onInput('duck')
      touchTimer = null
    }, LONG_PRESS_DURATION)
  })

  document.addEventListener('touchend', (e) => {
    e.preventDefault()
    
    // Wenn Timer noch läuft = kurzer Touch = Jump
    if
