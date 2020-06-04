import utils from './utils'
import Header from './Header/Header'

import './global.scss'

function global() {
  utils.init()
  Header.init()
}

document.addEventListener('DOMContentLoaded', global())