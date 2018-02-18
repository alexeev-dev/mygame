import React, {Component} from 'react'
import SmartUnicorn from '../utils/smart'

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => {
      resolve(image)
    })
    image.src = url
  })
}

function renderImage(ctx) {
  ctx.fillStyle = '#e6e57f'
  ctx.fillRect(0, 0, 200, 200)
  loadImage('img/test-unicorn.png').then((image) => {
    ctx.drawImage(image, 0, 0)
  })
}

const wei2eth = wei => wei / 1e+18

class GetUnicorn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: '1'
    }
    this.smart = new SmartUnicorn()
    this.handleBuy = this.handleBuy.bind(this)
    this.handleUnicorn = this.handleUnicorn.bind(this)
    this.smart.getPrice().then((price) => {
      this.setState({price})
    })
    this.smart.bind('created', this.handleUnicorn)
  }

  componentDidMount() {
    const ctx = this.canvas.getContext('2d')
    renderImage(ctx)
  }

  handleBuy(event) {
    event.preventDefault()
    this.smart.buyUnicorn(this.state.price)
  }

  handleUnicorn(event) {
    console.log(event)
  }

  render() {
    const {price} = this.state
    return (
      <div className="get-unicorn">
        <canvas
          ref={ref => this.canvas = ref}
          width="200"
          height="200"
          className="get-unicorn__canvas"
        >Unicorn</canvas>
        <p className="get-unicorn__price">Unicorn price: {wei2eth(price)} ETH</p>
        <a href="" className="get-unicorn__buy" onClick={this.handleBuy}>Buy</a>
      </div>
    )
  }
}

export default GetUnicorn
