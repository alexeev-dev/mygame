

// Here's how we would access our contract:
const abi = [
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

class SmartUnicorn {
	constructor() {
		if (typeof web3 !== 'undefined') {
			const contract = web3.eth.contract(abi)
			this.factory = contract.at(CONTRACT_ADDRESS)
			this.event = this.factory.NewZombie((error, result) => {
			  if (error) return
				const details = this.generate(result.zombieId, result.name, result.dna)
				if (typeof this.callback === 'function') {
					this.callback(details)
				}
			})
		}
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
		let dnaStr = String(dna)

	  while (dnaStr.length < 16) {
			dnaStr = "0" + dnaStr
		}

	  let details = {
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
