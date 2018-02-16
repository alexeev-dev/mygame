import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    e.preventDefault();
    const {onChange} = this.props
    if (typeof onChange === 'function') {
      onChange(e.target.value)
    }
  }

  render() {
    const {value} = this.props
    return (
      <form action="./" className="input-search" onSubmit={this.handleChange}>
        <input type="text" value={value} required placeholder="Enter Unicorn Name" onChange={this.handleChange}/>
          <i className="fa fa-search"></i>
          <input type="submit" value="" />
      </form>
    );
  }
}

export default Search;
