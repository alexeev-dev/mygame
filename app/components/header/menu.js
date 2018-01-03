import React, { Component } from 'react';

class Menu extends Component {

  render() {
    return (
      <div className="header-menu-block">
        <button className="cmn-toggle-switch cmn-toggle-switch__htx"><span></span></button>
        <ul className="header-menu" id="one">
          <li className="active"><a href="#">Marketplace</a></li>
          <li><a href="#">Stock</a></li>
          <li><a href="#">Laboratory</a></li>
          <li><a href="#">My Unicorns</a></li>
          <li><a href="#"><i className="fa fa-flash"></i> actions</a></li>
          <li id="ad-work-li"><a id="add-work-btn" className="btn color-1" href="#"><i className="fa fa-life-ring"></i> I NEED HELP </a></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
