import React, { Component } from 'react';

class SideBlock extends Component {
  constructor(props) {
  super(props)
}

  render() {
    return (
      <div className="be-vidget">
      <h3 className="letf-menu-article">
        {this.props.title}
      </h3>
        {this.props.children}
      </div>
    );
  }
}

export default SideBlock;
