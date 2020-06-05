import './utils/bootstrap/index'
import header from './Header/Header'
import footer from './Footer/Footer'

import './Global.scss'

const main = () => {
  header()
  footer()

  console.log(process.env.DB_HOST)

}

document.addEventListener('DOMContendLoaded', main())
