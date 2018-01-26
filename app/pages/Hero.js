import React, { Component } from 'react';
import {showLoginPopup} from '../actions/login-popup';

class Hero extends Component {
  constructor(props) {
    super(props)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleSignUp(event) {
    event.preventDefault()
    this.props.dispatch(showLoginPopup())
  }

  render() {
    const {metamask, loginPopup} = this.props
    return (
      <div className="head-bg">
        <div className="head-bg-img"></div>
        <div className="head-bg-content">
          <h1>Welcome to KickAss blockchain game</h1>
          <p>Do not miss the revolution that is happening right now with UnicornGO!</p>

          {!loginPopup.isOpen && <div className="step">
            <a className="be-register btn color-3 size-1 hover-6" onClick={this.handleSignUp}>
              <i className="fa fa-lock"></i>sign up now
            </a>
          </div>}

          {loginPopup.isOpen && !metamask.isOn && <div className="step">
            <div className="head-bg-video"><iframe width="560" height="315" src="https://www.youtube.com/embed/tfETpi-9ORs?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></div>
            <a className="be-register btn color-1 size-1 hover-6"><i className="fa fa-cloud-download"></i>install metamask</a>
            <a className="be-register btn color-3 size-1 hover-6"><i className="fa fa-thumbs-up"></i>i had metamask</a>
          </div>}

          {loginPopup.isOpen && metamask.network !== 'main'
            && <div className="step">
            <img src="img/wrong-network.png" alt="" />
          </div>}

          {loginPopup.isOpen && metamask.isOn && <div className="step">
            <form className="form-block register_me">
    					<div className="row">
    						<div className="col-xs-12 col-sm-12">
    							<div className="form-group fl_icon">
                    <div className="icon"><img src="img/subject-ico.png" alt="" /></div>
    								<input
                      className="form-input"
                      type="text"
                      required=""
                      readOnly
                      placeholder="Your Wallet"
                      value={metamask.account ? metamask.account : ''}
                    />
    							</div>
    						</div>
    						<div className="col-xs-12 col-sm-6 fl_icon">
    							<div className="form-group fl_icon">
    								<div className="icon"><img src="img/user-g-ico.png" alt="" /></div>
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
          </div>}

          <div className="step">
            <img src="img/login-metamask.png" alt="" />
          </div>

        </div>
      </div>
    );
  }
}

export default Hero;
