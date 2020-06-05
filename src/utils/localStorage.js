export default {
  key: index => {
    try {
      return localStorage.key(index)
    } catch {
      return null
    }
  },
  getItem: key => {
    try {
      return localStorage.getItem(key)
    } catch {
      return null
    }
  },
  setItem: (key, value) => {
    try {
      localStorage.setItem(key, value)
    } catch {
      return null
    }
  },
  removeItem: key => {
    try {
      localStorage.removeItem(key)
    } catch {
      return null
    }
  },
  clear: () => {
    try {
      localStorage.clear()
    } catch {
      return null
    }
  },
  length: () => {
    try {
      localStorage.length()
    } catch {
      return null
    }
  },
}
