import './restaurant-detail-skeleton.scss'

class RestaurantDetailSkeleton extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="heading">
        <div class="img"></div>
        <p class="city">Medan</p>
      </div>

      <div class="body">
        <p class="rating">Rating: 4</p>
        <p class="name">Melting Pot</p>
        <p class="address">Adress: Jln. Pandeglang no 19</p>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
        </p>
      </div>
    `
  }
}

customElements.define('restaurant-detail-skeleton', RestaurantDetailSkeleton)
