function getVueInstance () {
  return window.app.__vue__
}

function showError (error) {
  if (error) {
    getVueInstance().$noty.error(error)
  }
}

export default {
  showError
}
