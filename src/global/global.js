import utils from './utils'
import Header from './Header/Header'

import './Global.scss'

function global() {
  utils()
  Header()
}

document.addEventListener('DOMContentLoaded', global())
