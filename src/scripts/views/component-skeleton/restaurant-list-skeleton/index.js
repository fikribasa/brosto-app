import './restaurant-list-skeleton.scss'
import '../restaurant-item-skeleton'

class RestaurantListSkeleton extends HTMLElement {
  set count (count) {
    this._count = count
    this.render()
  }

  get count () {
    return this._count
  }

  render () {
    this.innerHTML = ''
    for (let i = 1; i <= this._count; i++) {
      const restaurantItemSkeleton = document.createElement(
        'restaurant-item-skeleton'
      )
      this.appendChild(restaurantItemSkeleton)
    }
  }
}

customElements.define('restaurant-list-skeleton', RestaurantListSkeleton)
