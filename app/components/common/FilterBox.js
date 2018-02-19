import React, { Component } from 'react';

class FilterBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: props.value
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault();
    const current = parseInt(e.target.getAttribute('data-id'))
		this.setState({current})
    const { onChange } = this.props
    if (typeof onChange === 'function') {
      onChange(current)
      console.log(current)
    }
  }

  render() {

    const {current} = this.state
    //const {items} = this.props
    const items = ['all_Unicorns', 'on_Modification', 'for_Sale', 'for_Modification', 'favorites']

    const menuList = items.map((value, index) => (
      <div key={index} className={"nav-tab-item" + (index === current ? " active" : "")} onClick={this.handleChange}>
        <span data-id={index}>{value}</span>
      </div>
    ))

    return (
      <div className="tab-nav-wrapper">
        <div className="nav-tab  clearfix">
          {menuList}
          {/* <div className="nav-tab-item active">
            <span>all_Unicorns</span>
          </div>
          <div className="nav-tab-item ">
            <span>on_Modification</span>
          </div>
          <div className="nav-tab-item ">
            <span>for_Sale</span>
          </div>
          <div className="nav-tab-item ">
            <span>for_Modification</span>
          </div>
          <div className="nav-tab-item ">
            <span><i className="fa fa-heart-o" aria-hidden="true"></i> favorites</span>
          </div> */}
        </div>
      </div>
    );
  }
}

export default FilterBox;
