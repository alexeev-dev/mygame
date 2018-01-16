import React, { Component } from 'react';

class UserPreview extends Component {
  render() {
    return (
      <div className="be-user-block">
        <div className="be-user-detail">
          <a className="be-ava-user" href="#">
            <img src="img/ava.png" alt="" />
          </a>
          <p className="be-use-name">Alex Alexeev</p>
          <span className="be-user-info">
            Singapore, Singapore
          </span>
        </div>
      </div>
    );
  }
}

export default UserPreview;
