import './restaurant-menu-skeleton.scss'

class RestaurantMenuSkeleton extends HTMLElement {
  set count (count) {
    this._count = count
    this.render()
  }

  get count () {
    return this._count
  }

  render () {
    this.innerHTML = `
      <div class="foods">
        <p class="foods__heading">Foods</p>
        <ul id="foodList" class="foods__body"></ul>
      </div>

      <div class="drinks">
        <p class="drinks__heading">Drinks</p>
        <ul id="drinkList" class="drinks__body"></ul>
      </div>
    `

    const foodList = this.querySelector('#foodList')
    for (let x = 1; x <= this._count; x++) {
      const foodItem = document.createElement('li')
      foodList.appendChild(foodItem)
    }

    const drinkList = this.querySelector('#drinkList')
    for (let y = 1; y <= this._count; y++) {
      const drinkItem = document.createElement('li')
      drinkList.appendChild(drinkItem)
    }
  }
}

customElements.define('restaurant-menu-skeleton', RestaurantMenuSkeleton)
