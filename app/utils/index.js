// Here's how we would access our contract:
const ABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "zombies",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "dna",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "zombieId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "dna",
				"type": "uint256"
			}
		],
		"name": "NewZombie",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			}
		],
		"name": "createRandomZombie",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const CONTRACT_ADDRESS = '0x07dB39EeA5e6418197d84d3fC7fd2aBf3D7e1b91'

const repeatString = (str, size) => {
  let result = str
  while (result.length < size) {
    result += str
  }
  return result
}

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:3333/"));
}

class SmartUnicorn {
	constructor() {
    const contract = web3.eth.contract(ABI)
    const factory = contract.at(CONTRACT_ADDRESS)
    this.contract = contract
    this.factory = factory
    this.event = factory.NewZombie((error, result) => {
  		if (error) return
  		const details = this.generate(result.args.zombieId, result.args.name, result.args.dna)
  		if (typeof this.callback === 'function') {
  			this.callback(details)
  		}
  	})
	}


	make(name) {
    this.factory.createRandomZombie(name, (error, result) => {
  		console.log(error, result)
  	})
	}

	bind(callback) {
		this.callback = callback
	}

	generate(id, name, dna) {
		const dnaStr = repeatString(String(dna), 16)
	  const details = {
			headChoice: dnaStr.substring(0, 2) % 3 + 1,
			hairChoice: dnaStr.substring(2, 4) % 3 + 1,
	    cornChoice: dnaStr.substring(4, 6) % 1 + 1,
			earsChoice: dnaStr.substring(6, 8) % 1 + 1,
			eyesChoise: dnaStr.substring(8, 10) % 1 + 1,
	    headColor: parseInt(dnaStr.substring(10, 12) / 100 * 360),
	    hairColor: parseInt(dnaStr.substring(12, 14) / 100 * 360),
	    zombieName: name,
	  }
	  return details
	}
}

export default SmartUnicorn