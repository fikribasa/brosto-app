import './footer-component.scss'

class FooterComponent extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <footer>
        <p>Copyright © <span id="year"></span> - <span class="footer__brand">Brosto</span></p>
      </footer>
    `

    const year = this.querySelector('#year')
    year.innerHTML = new Date().getFullYear()
  }
}

customElements.define('footer-component', FooterComponent)
