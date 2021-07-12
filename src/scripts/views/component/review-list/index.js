import './review-list.scss'
import '../review-item'

class ReviewList extends HTMLElement {
  set restaurant (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  get restaurant () {
    return this._restaurant
  }

  render () {
    this.innerHTML = `
    <p class="heading">User Review</p>
    <div id="reviewList" class="body"></div>`
    const reviewList = this.querySelector('#reviewList')
    this._restaurant.customerReviews.forEach((customerReview) => {
      const reviewItem = document.createElement('review-item')
      reviewItem.customerReview = customerReview
      reviewList.appendChild(reviewItem)
    })
  }
}

customElements.define('review-list', ReviewList)
