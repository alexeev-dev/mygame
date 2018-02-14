import React, { Component } from 'react';

class FilterControls extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a className={this.props.rowClass} onClick={this.props.onClick}><i className={this.props.icoClass}></i>{this.props.val}</a>
    );
  }
}

export default FilterControls;
