const main = () => {
  bodyEvent()
}

const bodyEvent = () => {
  document.querySelector('body')
    .addEventListener('click', () => {
      console.log('is body event')
    })
}

export default main