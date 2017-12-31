import React, { Component } from 'react';
import Dropdown from '../dropdown/dropdown';
import Header from '../header/header';

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
        <Header items={menu} />
        <Dropdown />
      </main>
    );
  }
}

export default App;
