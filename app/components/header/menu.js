import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

class Menu extends Component {

  render() {
    return (
      <div className="header-menu-block">
        <button className="cmn-toggle-switch cmn-toggle-switch__htx"><span></span></button>
        <ul className="header-menu" id="one">
          <li><Link to='/'>Marketplace</Link></li>
          <li><Link to='/stock'>Stock</Link></li>
          <li><Link to='/profile'>My Unicorns</Link></li>
          <li><Link to='/actions'><i className="fa fa-flash"></i> actions</Link></li>

          /* вот тут роут тоже прописать */
          <li id="ad-work-li"><a id="add-work-btn" className="btn color-1" href="#"><i className="fa fa-life-ring"></i> I NEED HELP </a></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
