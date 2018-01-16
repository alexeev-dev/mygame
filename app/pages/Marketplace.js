import React, { Component } from 'react';

import Unicorn from '../components/unicorn/Unicorn';

import Hero from './Hero';
import Filter from './Filter';

class PageMarketplace extends Component {
  constructor(props) {
    super(props)
    this.state = {
      unicorn: {
        headChoice: 3,
        hairChoice: 2,
        headColor: 34,
        hairColor: 124,
        cornChoice: 1,
        earsChoice: 1,
        eyesChoise: 1,
        zombieName: 'Satoshi'
      }
    }
    this.updateUnicorn = this.updateUnicorn.bind(this)
    this.props.smart.bind(this.updateUnicorn)
  }

  updateUnicorn(details) {
    this.setState({unicorn: details})
  }

  render() {
    const {
      headChoice,
      hairChoice,
      headColor,
      hairColor,
      cornChoice,
      earsChoice,
      eyesChoise
    } = this.state.unicorn
    return (
      <div id="content-block">
        <Hero />
        <Item gen={{head: headChoice, hair: hairChoice, corn: cornChoice, ears: earsChoice, eyes: eyesChoise}} color={{head: headColor, hair: hairColor}} />
        <Filter />
      </div>
    );
  }
}

export default PageMarketplace;
