import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form action="./" className="input-search">
        <input type="text" required="" placeholder="Enter Unicorn Name" />
          <i className="fa fa-search"></i>
          <input type="submit" value="" />
      </form>
    );
  }
}

export default Search;
