import React, { Component } from 'react'
import { connect } from 'react-redux'

import Hero from './Hero';
import Filter from './Filter';

const mapStateToProps = (state) => {
  return {
    account: state.account
  }
}

class Marketplace extends Component {
  render() {
    const {account} = this.props
    return (
      <div id="content-block">
        {!account && <Hero/>}
        <Filter />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Marketplace);
