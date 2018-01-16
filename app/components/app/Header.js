import React, { Component } from 'react';

import Logo from './Logo';
import Menu from './Menu';
import UserPreview from '../user/Preview';


class Header extends Component {

  render() {
    return (
      <header>
    		<div className="container-fluid custom-container">
    			<div className="row no_row row-header">
            <Logo />
            <Menu />
            <UserPreview />
    			</div>
    		</div>
    	</header>
    );
  }
}

export default Header;
