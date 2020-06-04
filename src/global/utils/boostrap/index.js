import querySelector from './selectors'

function init() {
  removeBootstrap()
}

function removeBootstrap() {
  [...querySelector.allLinks].map(link => {
    if (
      link.href.match(/bootstrap/) ||
      link.href.match(/style.css/) ||
      link.href.match(/font-awesome/)
    ) {
      link.parentNode.removeChild(link)
    }
  })
}

export default { init }
