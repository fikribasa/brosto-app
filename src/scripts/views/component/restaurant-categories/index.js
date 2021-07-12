import './restaurant-categories.scss'

class RestaurantCategories extends HTMLElement {
  set restaurant (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  get restaurant () {
    return this._restaurants
  }

  render () {
    this.innerHTML = `
      <p class="heading">Categories</p>
      <ul id="categories" class="body"></ul>
    `

    const categories = this.querySelector('#categories')
    this._restaurant.categories.forEach((category) => {
      const categoryItem = document.createElement('li')
      categoryItem.innerHTML = category.name
      categories.appendChild(categoryItem)
    })
  }
}

customElements.define('restaurant-categories', RestaurantCategories)
