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
          <img src="img/wrong-network.png" alt="" />
          <form className="form-block register_me">
  					<div className="row">
  						<div className="col-xs-12 col-sm-12">
  							<div className="form-group fl_icon">
  								<div className="icon"><img src="img/user-g-ico.png" alt="" /></div>
  								<input className="form-input" type="text" required="" placeholder="Your Wallet" />
  							</div>
  						</div>
  						<div className="col-xs-12 col-sm-6 fl_icon">
  							<div className="form-group fl_icon">
  								<div className="icon"><img src="img/subject-ico.png" alt="" /></div>
  								<input className="form-input" type="text" required="" placeholder="Your Name" />
  							</div>
  						</div>
  						<div className="col-xs-12 col-sm-6 fl_icon">
  							<div className="form-group fl_icon">
  								<div className="icon"><img src="img/mail-g-ico.png" alt="" /></div>
  								<input className="form-input" type="text" required="" placeholder="Your email" />
  							</div>
  						</div>
  						<button className="btn color-1 size-2 hover-1 pull-right">submit</button>
  					</div>
  				</form>
        </div>
      </div>
    );
  }
}

export default Hero;
