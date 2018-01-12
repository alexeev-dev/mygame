import React, { Component } from 'react';

import Hero from '../../components/pages/hero';
import Item from '../../components/item/item';

class MarketplacePage extends Component {
  render() {
    return (
      <div id="content-block">
        <Hero />
        <Item />
      </div>
    );
  }
}

export default MarketplacePage;
