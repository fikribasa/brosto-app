import './not-found.scss'

class NotFound extends HTMLElement {
  set message (message) {
    this._message = message
    this.render()
  }

  get message () {
    return this._message
  }

  render () {
    this.innerHTML = `
      <p>${this._message}</p>
    `
  }
}

customElements.define('not-found', NotFound)
