import CONFIG from '../../../globals/config'
import './restaurant-detail.scss'

class RestaurantDetailItem extends HTMLElement {
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
      <p class="rating">Rating: ${this._restaurant.rating}</p>
        <p class="address">Adress: ${this._restaurant.address}</p>
        <p class="description">${this._restaurant.description}</p>
      </div>
    `
  }
}

customElements.define('restaurant-detail', RestaurantDetailItem)
