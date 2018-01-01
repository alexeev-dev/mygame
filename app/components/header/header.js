import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {

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

Header.propTypes = {
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  /*submit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,*/
  type: PropTypes.oneOf(['news', 'photos']),
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  }),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number
    })
  )
};

export default Header;
