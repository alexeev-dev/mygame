import React, {Component} from 'react'

class FilterButton extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    const {type, value, onClick} = this.props
    if (typeof onClick === 'function') {
      onClick(type, value)
    }
  }

  render() {
    return (
      <a className="btn color-6 size-3 hover-10" onClick={this.handleClick}>
        <i className="fa keyword fa-times"></i>{this.props.value}
      </a>
    )
  }
}

export default FilterButton
