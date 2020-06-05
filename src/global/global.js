import './utils/bootstrap/index'
import header from './Header/Header'
import footer from './Footer/Footer'

import './Global.scss'

const main = () => {
  header()
  footer()
}

document.addEventListener('DOMContendLoaded', main())
