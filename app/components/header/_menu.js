import React, { Component } from 'react';

class Menu extends Component {

  render() {
    return (
      <div class="header-menu-block">
        <button class="cmn-toggle-switch cmn-toggle-switch__htx"><span></span></button>
        <ul class="header-menu" id="one">
          <li class="active"><a href="#">Marketplace</a></li>
          <li><a href="#">Stock</a></li>
          <li><a href="#">Laboratory</a></li>
          <li><a href="#">My Unicorns</a></li>
          <li><a href="#"><i class="fa fa-flash"></i> actions</a></li>
          <li id="ad-work-li"><a id="add-work-btn" class="btn color-1" href="#"><i class="fa fa-life-ring"></i> I NEED HELP </a></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
