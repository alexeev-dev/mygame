import React, { Component } from 'react';

import Hero from '../../components/pages/hero';
import Item from '../../components/item/item';

class MarketplacePage extends Component {
  render() {
    return (
      <div id="content-block">
        <Hero />
        <Item gen={{head: 3, hair: 2, corn: 1, ears: 1, eyes: 1}} color={{head: '#654566', hair: '#666555'}} />
      </div>
    );
  }
}

export default MarketplacePage;
