import Web3 from 'web3'
import ABI from './abi'

const CONTRACT_ADDRESS = '0xE817b60E8A8a5A19F6774969F954716B7A602866'

class SmartUnicorn {
  constructor() {
    this.web3 = new Web3(web3.currentProvider)
    this.contract = new this.web3.eth.Contract(ABI, CONTRACT_ADDRESS)
    this.web3.eth.getAccounts().then((accounts) => {
      this.wallet = accounts[0]
    })
  }

  getPrice() {
    const {createUnicornPrice} = this.contract.methods
    return createUnicornPrice().call()
  }

  buyUnicorn(price) {
    const {createUnicorn} = this.contract.methods
    return createUnicorn().send({
      from: this.wallet,
      value: price
    })
  }

  bind(event, callback) {
    if (typeof event === 'string') {
      if (event === 'created') {
        this.contract.events.CreateUnicorn(callback)
      }
    }
  }
}

export default SmartUnicorn
