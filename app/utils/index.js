
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:3333/"));
}

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

const ZombieFactoryContract = web3.eth.contract(abi)
const contractAddress = '0x07db39eea5e6418197d84d3fc7fd2abf3d7e1b91'
const ZombieFactory = ZombieFactoryContract.at(contractAddress)
// `ZombieFactory` has access to our contract's public functions and events

// Call our contract's `createRandomZombie` function:
export const makeZombie = (name) => {
	ZombieFactory.createRandomZombie(name, function(error, result) {
		console.log(error, result)
	});
}

// Listen for the `NewZombie` event, and update the UI
let event;
export const bindZombie = (callback) => {
	event = ZombieFactory.NewZombie(function zcallback(error, result) {
		console.log('firefox')
		console.log(error, result)
		if (error) return
		const details = generateZombie(result.args.zombieId, result.args.name, result.args.dna)
		console.log(details)
		console.log(result.args.dna);
		if (typeof callback === 'function') {
			callback(details)
		}
	})
	console.log('e-start')
	console.log(event)
	console.log('e-end')
}


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


	console.log(dnaStr)

  let zombieDetails = {

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
