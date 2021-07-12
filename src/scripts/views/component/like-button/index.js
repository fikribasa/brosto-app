import './like-button.scss'

class LikeButton extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  set isRestaurantExist (exist) {
    this._exist = exist
    this.render()
  }

  set clickEvent (event) {
    this._clickEvent = event
    this.render()
  }

  get isRestaurantExist () {
    return this._exist
  }

  get clickEvent () {
    return this._clickEvent
  }

  render () {
    this.innerHTML = `
      <button aria-label="${
        this._exist
          ? 'unlike this restaurant'
          : 'like this restaurant'
      }" id="likeButton">
        ${
          this._exist
            ? ' <i class="fa fa-heart" aria-hidden="true"></i>'
            : '<i class="fa fa-heart-o" aria-hidden="true"></i>'
        }
      </button>
    `

    this.querySelector('#likeButton').addEventListener(
      'click',
      this._clickEvent
    )
  }
}

customElements.define('like-button', LikeButton)
