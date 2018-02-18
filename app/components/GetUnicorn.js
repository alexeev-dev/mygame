import React, {Component} from 'react'
import SmartUnicorn from '../utils/smart'
import {UnicornRenderer} from '../utils/UnicornRenderer'

const testUnicorn = {
  BDYFRM: {type: Math.floor(Math.random() * 4), var: Math.floor(Math.random())},
  WNGFRM: {type: Math.floor(Math.random() * 4), var: Math.floor(Math.random())},
  HOOFRM: {type: Math.floor(Math.random() * 4), var: Math.floor(Math.random())},
  HRNFRM: {type: Math.floor(Math.random() * 4), var: Math.floor(Math.random())},
  EYEFRM: {type: Math.floor(Math.random() * 4), var: Math.floor(Math.random())},
  HAIFRM: {type: Math.floor(Math.random() * 4), var: Math.floor(Math.random())},
  NOSFRM: {type: Math.floor(Math.random() * 4), var: Math.floor(Math.random())},
  MTHFRM: {type: Math.floor(Math.random() * 4), var: Math.floor(Math.random())},
  EARFRM: {type: Math.floor(Math.random() * 4), var: Math.floor(Math.random())},
  STAINS: {type: Math.floor(Math.random() * 4), var: Math.floor(Math.random())}
}

function renderUnicorn(unicorn, color) {
  return new Promise(resolve => {
    const renderer = new UnicornRenderer(300, 300)
    renderer.render(unicorn, color, resolve)
  })
}

class GetUnicorn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 1,
      weiPrice: 1,
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
    this.smart.buyUnicorn(this.state.weiPrice)
  }

  handleUnicorn(error, result) {
    if (error) {
      console.log(error)
    } else {
      console.log(result.args.UnicornId, result.args.UnicornId.toNumber())
      this.smart.getUnicorn(result.args.UnicornId.toNumber())
        .then((result) => {
          renderUnicorn(testUnicorn, 0x9100a9).then((image) => {
            this.setState({unicorn: image})
          })
          console.log(result[0])
          console.log(result[1].toString())
          console.log(result[2].toString())
          console.log(result[3].toString())
        })
        .catch(console.log)
      console.log(result)
    }
  }

  render() {
    const {price, unicorn} = this.state
    return (
      <div className="get-unicorn">
        <img src={unicorn} alt="Unicorn"/>
        <p className="get-unicorn__price">Unicorn price: {price} ETH</p>
        <a href="" className="get-unicorn__buy" onClick={this.handleBuy}>Buy</a>
      </div>
    )
  }
}

export default GetUnicorn
