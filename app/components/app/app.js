import React, { Component } from 'react';
import Dropdown from '../dropdown/dropdown';
// import Header from '../header/header';

import {Link, Route} from 'react-router';

import HomePage from '../../pages/home/home';
import AboutPage from '../../pages/home/about';
import ContactPage from '../../pages/home/contact';

const menu = [
	{
		url: '/home',
		label: 'Home'
	},
	{
		url: '/marketplace',
		label: 'Marketplace'
	},
	{
		url: '/about',
		label: 'About'
	},
	{
		url: '/contact',
		label: 'Contact'
	}
];

class App extends Component {
  render() {
    return (
      <main>
        //<Header items={menu} />
        <Dropdown />
				<nav>
					<Link to='/home'>Home</Link>
					<Link to='/about'>About</Link>
					<Link to='/contact'>Contact</Link>
				</nav>
				<div>
					<Route path='/' component='{HomePage}' />
					<Route path='/about' component='{AboutPage}' />
					<Route path='/contact' component='{ContactPage}' />
				</div>
      </main>
    );
  }
}

export default App;
