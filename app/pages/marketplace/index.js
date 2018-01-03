import React, { Component } from 'react';

import Hero from '../../components/pages/hero';
import Filter from '../../components/filter/index';

class MarketplacePage extends Component {
  render() {
    return (
      <div id="content-block">
        <Hero />
        <Filter />
      </div>
    );
  }
}

export default MarketplacePage;
