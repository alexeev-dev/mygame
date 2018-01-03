import React, { Component } from 'react';

import Logo from './_logo';
import Menu from './_menu';
import User from './_user';


class Header extends Component {

  render() {
    return (
      <header>
    		<div class="container-fluid custom-container">
    			<div class="row no_row row-header">
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
