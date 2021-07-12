import './restaurant-list.scss'
import '../restaurant-item'

class RestaurantList extends HTMLElement {
  set restaurants (restaurants) {
    this._restaurants = restaurants
    this.render()
  }

  get restaurants () {
    return this._restaurants
  }

  render () {
    this.innerHTML = ''
    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item')
      restaurantItemElement.restaurant = restaurant
      this.appendChild(restaurantItemElement)
    })
  }
}

customElements.define('restaurant-list', RestaurantList)
