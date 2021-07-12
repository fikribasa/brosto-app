import './hero-image.scss'

class HeroImage extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="hero__text">
        <h1 class="hero__brand">Brosto</h1>
        <p>Paradise on your plate.</p>
      </div>
    `
  }
}

customElements.define('hero-image', HeroImage)
