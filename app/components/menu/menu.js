import React, { Component } from 'react';

const links = [
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

class Menu extends Component {
  render() {
    return (
      <nav>
      	<ul>
      		{links.map((item, index) => <li key={index}><a href={item.url}>{item.label}</a></li>)}
      	</ul>
      </nav>
    ); 
  }
}

export default Menu;
