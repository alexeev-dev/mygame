import React, {Component} from 'react'
import SmartUnicorn from '../utils/smart'
import {UnicornRenderer} from '../utils/UnicornRenderer'
import decodeDNA from '../utils/dna'

function renderUnicorn(dna, color) {
  return new Promise(resolve => {
    const renderer = new UnicornRenderer(300, 300)
    renderer.render(decodeDNA(dna), color, resolve)
  })
}

class GetUnicorn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 1,
      weiPrice: 1,
      status: 'start',
      unicorn: 'img/test-unicorn.png'
    }
    this.smart = new SmartUnicorn()
    this.handleBuy = this.handleBuy.bind(this)
    this.handleUnicorn = this.handleUnicorn.bind(this)
    this.smart.getPrice().then((price) => {
      this.setState({price: price[1], weiPrice: price[0]})
    })
    this.smart.bind('created', this.handleUnicorn)
  }

  handleBuy(event) {
    event.preventDefault()
    this.smart.buyUnicorn(this.state.weiPrice).then(result => {
      this.setState({status: 'creating'})
    })
  }

  handleUnicorn(unicornId) {
    this.setState({status: 'created'})
    this.smart.getUnicorn(unicornId)
      .then((result) => {
        console.log(result)
        renderUnicorn(result.dna, 0x9100a9).then((image) => {
          this.setState({unicorn: image, status: 'done'})
        })
      })
      .catch(console.log)
  }

  render() {
    const {price, status, unicorn} = this.state
    return (
      <div className="get-unicorn">
        <img src={unicorn} alt="Unicorn"/>
        <p className="get-unicorn__price">
          {status === 'start' && `Unicorn price: ${price} ETH`}
          {status === 'creating' && 'Creating unicorn...'}
          {status === 'created' && 'Your unicorn is created and now it in embryo state. Please wait more...'}
          {status === 'done' && 'Your unicorn was born!'}
        </p>
        {status === 'start' &&
          <a href="" className="get-unicorn__buy" onClick={this.handleBuy}>Buy</a>}
      </div>
    )
  }
}

export default GetUnicorn
