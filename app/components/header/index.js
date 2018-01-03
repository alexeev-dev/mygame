import React, { Component } from 'react';

import Logo from './logo';
import Menu from './menu';
import User from './user';


class Header extends Component {

  render() {
    return (
      <header>
    		<div className="container-fluid custom-container">
    			<div className="row no_row row-header">
            <Logo />
            <Menu />
            <User />
    			</div>
    		</div>
    	</header>
    );
  }
}

export default Header;
