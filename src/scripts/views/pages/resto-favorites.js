import FavoriteRestaurantsdb from '../../data/database'

import '../component/restaurant-list'
import '../component/not-found'

const Favorite = {
  async render () {
    return `
    <section class="favorite__restaurants" id="favoriteRestaurants">
      <h2 class="favorite-restaurants__heading">Favorite Cafe</h2>
      <div id="favoriteRestaurantsBody" class="favorite-restaurants__body"></div>
    </section>
    
  `
  },

  async afterRender () {
    this._showFavoriteRestaurants()
  },
  async _showFavoriteRestaurants () {
    this._displayRestaurants(
      await FavoriteRestaurantsdb.getAllRestaurants()
    )
  },

  _displayRestaurants (restaurants) {
    this.showFavoriteRestaurants(restaurants)
  },

  showFavoriteRestaurants (restaurants = []) {
    const favoriteRestaurantsBody = document.getElementById(
      'favoriteRestaurantsBody'
    )

    if (restaurants.length) {
      favoriteRestaurantsBody.innerHTML = '<restaurant-list></restaurant-list>'
      const restaurantList = document.querySelector('restaurant-list')

      restaurantList.restaurants = restaurants
    } else {
      favoriteRestaurantsBody.innerHTML = '<not-found></not-found>'
      const notFound = document.querySelector('not-found')

      notFound.message = 'No favorite cafe was selected'
    }

    document
      .getElementById('favoriteRestaurants')
      .dispatchEvent(new Event('restaurants:updated'))
  }
}

export default Favorite
