import React, { Component } from 'react';

import Hero from '../../components/pages/hero';
import Item from '../../components/item/item';

class MarketplacePage extends Component {
  render() {
    return (
      <div id="content-block">
        <Hero />
        <Item gen={{head: 0, hair: 0, corn: 0, ears: 0, eyes: 0}} color={{head: 0, hair: 0}} />
      </div>
    );
  }
}

export default MarketplacePage;
