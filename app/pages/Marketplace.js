import React, { Component } from 'react';

import Hero from './Hero';
import Filter from './Filter';

class PageMarketplace extends Component {
  render() {
    const {isLoggedIn} = this.props
    return (
      <div id="content-block">
        {!isLoggedIn && <Hero/>}
        <Filter />
      </div>
    );
  }
}

export default PageMarketplace;
