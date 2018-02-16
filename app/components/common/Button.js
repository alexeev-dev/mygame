import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    e.preventDefault();
    try{
      this.props.onClick();
    }catch(e){
      //console.log(e);
    }
  }

  render() {
    return (
      <div type={this.props.type} onClick={this.handleClick}>
        {this.props.children}
      </div>
    );
  }
}

export default Button;
