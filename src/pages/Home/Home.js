import './Home.scss'

const main = () => {
  eventHome()
}

const eventHome = () => {
  document.querySelector('body')
    .addEventListener('click', () => {
      console.log('cliced this')
    })
}

export default main