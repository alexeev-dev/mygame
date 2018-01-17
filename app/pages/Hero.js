import React, { Component } from 'react';

class Hero extends Component {

  render() {
    return (
      <div className="head-bg">
        <div className="head-bg-img"></div>
        <div className="head-bg-content">
          <h1>Welcome to KickAss blockchain game</h1>
          <p>Do not miss the revolution that is happening right now with UnicornGO!</p>
          <div className="head-bg-video"><iframe width="560" height="315" src="https://www.youtube.com/embed/tfETpi-9ORs?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></div>
          <a className="be-register btn color-3 size-1 hover-6"><i className="fa fa-lock"></i>sign up now</a>
          <a className="be-register btn color-1 size-1 hover-6"><i className="fa fa-cloud-download"></i>install metamask</a>
        </div>
      </div>
    );
  }
}

export default Hero;
