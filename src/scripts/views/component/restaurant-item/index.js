import './restaurant-item.scss'
import CONFIG from '../../../globals/config'

class RestaurantItem extends HTMLElement {
  set restaurant (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  get restaurant () {
    return this._restaurants
  }

  render () {
    this.innerHTML = `
      <div class="heading">
        <img class="lazyload" width="100%" height="100%" data-src="${
          CONFIG.BASE_SMALL_IMAGE_URL + this._restaurant.pictureId
        }" alt="${this._restaurant.name}">

        <p class="city">${this._restaurant.city}</p>
      </div>

      <div class="body">
      <p class="name">${this._restaurant.name}<p>         
      <p class="rating">Rating: ${this._restaurant.rating}<p>
        <p class="description">${this._restaurant.description}<p>
      </div>

      <div class="actions">
        <a aria-label="see detail ${this._restaurant.name}" href="#/detail/${
      this._restaurant.id
    }">See detail</a>
      </div>
    `
  }
}

customElements.define('restaurant-item', RestaurantItem)
