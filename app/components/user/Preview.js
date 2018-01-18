import React, { Component } from 'react';

class UserPreview extends Component {
  render() {
    return (
      <div className="login-header-block">
        <div className="login_block">
          <div className="be-drop-down login-user-down">
            <img className="login-user" src="img/login.jpg" alt=""/>
            <span className="be-dropdown-content">Hi, <span>Alex</span></span>
            <div className="drop-down-list a-list">
              <a href="#">Invite</a>
              <a href="#">Logout</a>
            </div>
          </div>
          <a className="btn-login btn color-1 size-2 hover-2" href=""><i className="fa fa-user"></i>Log in</a>
        </div>
      </div>

    );
  }
}

export default UserPreview;
