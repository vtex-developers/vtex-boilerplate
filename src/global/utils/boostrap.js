import Selector from './selectors'

function removeBootstrap() {
  [...Selector.allLinks].map(link => {
    if (
      link.href.match(/bootstrap/) ||
      link.href.match(/style.css/) ||
      link.href.match(/font-awesome/)
    ) {
      link.parentNode.removeChild(link)
    }
  })
}

export default removeBootstrap
