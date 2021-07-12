import UrlParser from '../../routes/url-parser'
import RestaurantDbHandler from '../../data/restaurant-db'
import FavoriteRestaurantsdb from '../../data/database'
import LikeButtonPresenter from '../../presenters/like-button-presenter'

import '../component/restaurant-detail-item'
import '../component/restaurant-categories'
import '../component/restaurant-menu'
import '../component/review-list'
import '../component/like-button'
import '../component/not-found'
import '../component/snackbar-component'

import '../component-skeleton/restaurant-detail-skeleton'
import '../component-skeleton/restaurant-categories-skeleton'
import '../component-skeleton/restaurant-menu-skeleton'
import '../component-skeleton/review-list-skeleton'
import '../component-skeleton/review-item-skeleton'

const Detail = {
  async render () {
    return `
        <section class="restaurant">
          <h2 class="restaurant__heading restaurant__heading__skeleton">Detail Cafe</h2>
          <div class="restaurant__body">
            <restaurant-detail-skeleton></restaurant-detail-skeleton>
            <hr>
            <restaurant-categories-skeleton></restaurant-categories-skeleton>
            <hr>
            <restaurant-menu-skeleton></restaurant-menu-skeleton>
            <hr>
            <customer-review-skeleton></customer-review-skeleton>
            <review-list-skeleton></review-list-skeleton>
          </div>
        </section>
    `
  },

  async afterRender () {
    document.querySelector('restaurant-categories-skeleton').count = 3
    document.querySelector('restaurant-menu-skeleton').count = 3
    document.querySelector('review-list-skeleton').count = 3
    const mainContent = document.getElementById('mainContent')

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner()
      const restaurant = await RestaurantDbHandler.restaurantDetail(url.id)

      mainContent.innerHTML = `
        <section id="restaurant" class="restaurant">
          <h2 class="restaurant__heading">${restaurant.name}</h2>
          <div class="restaurant__body">
            <restaurant-detail></restaurant-detail>
            <hr>
            <restaurant-categories></restaurant-categories>
            <hr>
            <restaurant-menu></restaurant-menu>
            <hr>
            <review-list></review-list>
          </div>
        </section>
        <like-button></like-button>
      `
      document.querySelector('restaurant-detail').restaurant = restaurant
      document.querySelector('restaurant-categories').restaurant = restaurant
      document.querySelector('restaurant-menu').restaurant = restaurant
      document.querySelector('review-list').restaurant = restaurant

      await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('like-button'),
        favoriteRestaurant: FavoriteRestaurantsdb,
        restaurant
      })
    } catch (e) {
      console.log('not-found: ' + e)
      mainContent.innerHTML = '<not-found></not-found>'
      document.querySelector('not-found').message =
        'Failed to load data \nPlease check your internet connection'
    }
  }
}

export default Detail
