import React, { Component } from 'react';

class PopupLogin extends Component {
  render() {
    return (
      <div className="large-popup login">
    		<div className="large-popup-fixed"></div>
    		<div className="container large-popup-container">
    			<div className="row">
    				<div className="col-md-8 col-md-push-2 col-lg-6 col-lg-push-3  large-popup-content">
    					<div className="row">
    						<div className="col-md-12">
    							<i className="fa fa-times close-button"></i>
    							<h5 className="large-popup-title">Log in</h5>
    						</div>
    						<form action="./" className="popup-input-search">
    						<div className="col-md-12">
    							<input className="input-signtype" type="text" required="" placeholder="Wallet" />
    						</div>
    						<div className="col-xs-6">
    							<div className="be-checkbox">
    							<label className="check-box">
    								    <input className="checkbox-input" type="checkbox" value="" /> <span className="check-box-sign"></span>
    								</label>
    								<span className="large-popup-text">
    									Stay signed in
    								</span>
    							</div>
    						</div>
    						<div className="col-xs-6 for-signin">
    							<input type="submit" className="be-popup-sign-button" value="SIGN IN" />
    						</div>
    						</form>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    );
  }
}

export default PopupLogin;
