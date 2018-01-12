import React, { Component } from 'react';

import Hero from '../../components/pages/hero';
import Item from '../../components/item/item';

import bindZombie from '../../utils/index'

class MarketplacePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headChoice: 3,
      hairChoice: 2,
      headColor: 120,
      hairColor: 55,
      cornChoice: 1,
      earsChoice: 1,
      eyesChoise: 1,
      zombieName: 'Satoshi'
    }
    this.handleZombie = this.handleZombie.bind(this)
    bindZombie(this.handleZombie)
  }

  handleZombie(details) {
    this.setState(details)
  }

  render() {

    const {headChoice, hairChoice, headColor, hairColor, cornChoice, earsChoice, eyesChoise} = this.state

    return (
      <div id="content-block">
        <Hero />
        <Item gen={{head: headChoice, hair: hairChoice, corn: cornChoice, ears: earsChoice, eyes: eyesChoise}} color={{head: headColor, hair: hairColor}} />
      </div>
    );
  }
}

export default MarketplacePage;
