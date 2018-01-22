import React, { Component } from 'react';

const UserPreview = ({account, onLogin}) => {
  const isLoggedIn = account !== null
  return (
    <div className="login-header-block">
      <div className="login_block">
        {isLoggedIn ?
        <div className="be-drop-down login-user-down">
          <img className="login-user" src="img/login.jpg" alt=""/>
          <span className="be-dropdown-content">Hi, <span>{account.name}</span></span>
          <div className="drop-down-list a-list">
            <a href="#">Invite</a>
            <a href="#">Logout</a>
          </div>
        </div>
        : <a className="btn-login btn color-1 size-2 hover-2" href="" onClick={onLogin}>
          <i className="fa fa-user"></i>Log in
        </a>}
      </div>
    </div>
  )
}

export default UserPreview;
