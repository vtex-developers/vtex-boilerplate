import Selector from '../selectors'

;(() => {
  const removeBootstrap = () => {
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
  return Promise.resolve(removeBootstrap())
    .then(() => console.log('Removed Bootstrap successfully'))
    .catch(err => console.error(`Removed Bootstrap error: ${err}`))
})()



