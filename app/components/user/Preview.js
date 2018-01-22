import React, { Component } from 'react';

const UserPreview = ({account}) => (
  <div className="be-user-block">
    <div className="be-user-detail">
      <a className="be-ava-user" href="#">
        <img src="img/ava.png" alt="" />
      </a>
      <p className="be-use-name">{account.name}</p>
      <span className="be-user-info">
        Singapore, Singapore
      </span>
    </div>
  </div>
)

export default UserPreview;
