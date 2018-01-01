import React, { Component, PropTypes } from 'react';

class Header extends Component {

  // static propTypes = {
  //   items: PropTypes.array.isRequired
  // };

  render() {
    console.log('items', this.props.items);
    return (
      <nav>
        <ul>
        {this.props.items.map((item, index) =>
          <li key={index}><a href={item.url}>{item.label}</a></li>
        )}
        </ul>
      </nav>
    );
  }
}

export default Header;
