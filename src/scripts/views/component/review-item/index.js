import './review-item.scss'

class ReviewItem extends HTMLElement {
  set customerReview (customerReview) {
    this._customerReview = customerReview
    this.render()
  }

  get customerReview () {
    return this._customerReview
  }

  render () {
    this.innerHTML = `
      <div class="heading">
        <p class="date">${this._customerReview.date}</p> 
        <p class="name">Name: ${this._customerReview.name}</p>
      </div>

      <div class="body">
        <p class="review">Review: ${this._customerReview.review}</p>
      </div>
    `
  }
}

customElements.define('review-item', ReviewItem)
