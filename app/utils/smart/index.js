import Web3 from 'web3'
import ABI from './abi'

const CONTRACT_ADDRESS = '0xE817b60E8A8a5A19F6774969F954716B7A602866'

class SmartUnicorn {
  constructor() {
    this.web3 = new Web3(web3.currentProvider)
    this.contract = this.web3.eth.contract(ABI).at(CONTRACT_ADDRESS)
    this.account = this.web3.eth.accounts[0]
    console.log(this.contract)
  }

  getPrice() {
    const {createUnicornPrice} = this.contract
    return new Promise((resolve, reject) => {
      createUnicornPrice((error, result) => {
        if (error) {
          reject(error)
        } else {
          const {BigNumber} = this.web3
          const k = new BigNumber('1e+18')
          resolve([result, result.dividedBy(k).toString()])
        }
      })
    })
    return
  }

  getUnicorn(id) {
    return new Promise((resolve, reject) => {
      const gen = this.contract.unicorns(id, (error, result) => {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      })
    })
  }

  buyUnicorn(price) {
    const {createUnicorn} = this.contract
    return createUnicorn({
      from: this.account,
      value: price
    }, (error, result) => {
      if (error) {
        console.log(error)
      }
    })
  }

  bind(event, callback) {
    if (typeof event === 'string') {
      if (event === 'created') {
        this.contract.CreateUnicorn(callback)
      }
    }
  }
}

export default SmartUnicorn
