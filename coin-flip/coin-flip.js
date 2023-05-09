const mainContainer = document.getElementById('main-container')
const coin = document.getElementById('coin')

const hide = () => (mainContainer.className = 'main-container hidden')
const show = () => (mainContainer.className = 'main-container')
let currentFace = 'heads'
let isFlipping = false

const getNextFace = () => {
  const number = Math.random()
  console.log(number)
  if (number < 0.5) {
    return 'heads'
  }
  return 'tails'
}

const flip = () => {
  if (isFlipping) {
    return
  }

  isFlipping = true

  show()
  setTimeout(() => {
    const nextFace = getNextFace()
    coin.className = `coin ${currentFace}-to-${nextFace}`
    currentFace = nextFace
    setTimeout(() => {
      hide()
      coin.className = `coin ${currentFace}`
      isFlipping = false
    }, 5000)
  }, 2000)
}

window.addEventListener('load', () => {
  setTimeout(() => {
    currentFace = getNextFace()
    coin.className = `coin ${currentFace}`
    show()
    flip()
  }, 500)
})
