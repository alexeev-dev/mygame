import Web3 from 'web3'
import ABI from './abi'

const CONTRACT_ADDRESS = '0xB8120295EEAa399EC5DeE8055b93c5B162035F41'

class SmartUnicorn {
  constructor() {
    this.web3 = new Web3(web3.currentProvider)
    this.contract = this.web3.eth.contract(ABI).at(CONTRACT_ADDRESS)
    this.account = this.web3.eth.accounts[0]
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
  }

  getUnicorn(id) {
    return new Promise((resolve, reject) => {
      const waitForGen = () => {
        this.contract.unicorns(id, (error, result) => {
          if (error) {
            reject(error)
          } else {
            if (result[0].length > 4) {
              resolve({
                dna: result[0],
                birthTime: result[1].toNumber(),
                freezingEndTime: result[2].toNumber(),
                freezingIndex: result[3].toNumber()
              })
            } else {
              setTimeout(waitForGen, 30000)
            }
          }
        })
      }
      waitForGen()
    })
  }

  buyUnicorn(price) {
    const {createUnicorn} = this.contract
    return new Promise((resolve, reject) => {
      createUnicorn({
        from: this.account,
        value: price
      }, (error, result) => {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      })
    })
  }

  bind(event, callback) {
    if (typeof event === 'string') {
      if (event === 'created') {
        this.contract.CreateUnicorn((error, result) => {
          if (error) {
            console.log(error)
          } else {
            if (result.args.owner === this.account) {
              callback(result.args.UnicornId.toNumber())
            }
          }
        })
      }
    }
  }
}

export default SmartUnicorn
