import './review-list-skeleton.scss'
import '../review-item-skeleton'

class ReviewListSkeleton extends HTMLElement {
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
      const reviewItem = document.createElement('review-item-skeleton')
      this.appendChild(reviewItem)
    }
  }
}

customElements.define('review-list-skeleton', ReviewListSkeleton)
