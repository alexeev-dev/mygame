import React, { Component } from 'react';
import Dropdown from '../dropdown/dropdown';
import Header from '../header/header';

import RegistrationForm from '../register/register';

import {Link, Route} from 'react-router-dom';

import HomePage from '../../pages/home/home';
import AboutPage from '../../pages/about/about';
import ContactPage from '../../pages/contact/contact';

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
	submit() {
			console.log('submit', this.testInput);
	}

  render() {
    return (
      <main>
        <Header items={menu} />
        <Dropdown />
				<nav>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
					<Link to='/contact'>Contact</Link>
				</nav>
				<div>
					<Route exact path='/' component={HomePage} />
					<Route path='/about' component={AboutPage} />
					<Route path='/contact' component={ContactPage} />
				</div>
				<RegistrationForm />
				<br /><br />
				<div>
					<input type='text' placeholder='test' ref={(input) => this.testInput = input} />
					<button onClick={this.submit.bind(this)}>Submit</button>
				</div>
      </main>
    );
  }
}

export default App;
