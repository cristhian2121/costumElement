class KameCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    // Create element
    const $divContainer = document.createElement('div')
    const $divHeader = document.createElement('div')
    const $divBody = document.createElement('div')
    const style = document.createElement('style')

    // Create attributes
    $divContainer.setAttribute('class', 'container')
    $divHeader.setAttribute('class', 'container--header')
    $divBody.setAttribute('class', 'container--body')
    style.textContent = `
    .container {
        border: 1px solid rgb(62, 172, 187);
        border-radius: 5px;
        box-shadow: steelblue 1px 1px 1px 2px;
        height: 150px;
        width: 200px;
        padding: 5px;
        margin: 5px;
      }
      .container--header {
        text-align: center;
        font-size: 1.5rem;
      }
      .container--body {
        font-size: 1.1rem;
      }
    `

    // Get Attributes
    const title = this.getAttribute('title')
    console.log('title: ', title);
    const text = this.getAttribute('text')

    // Put texts
    $divHeader.innerText = title
    $divBody.innerText = text

    $divContainer.appendChild($divHeader)
    $divContainer.appendChild($divBody)

    shadow.appendChild(style)
    shadow.appendChild($divContainer)

    // <div class="container">
    //     <div class="container--header">Cris</div>
    //     <div class="container--body">asdasdasdasdaas</div>
    // </div>

  }
}

customElements.define('kame-card', KameCard)
