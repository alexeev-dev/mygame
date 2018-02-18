import React, { Component } from 'react'

class TagsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: -1
    }
		this.handleChange = this.handleChange.bind(this)
  }

	handleChange(e){
    e.preventDefault()
    e.stopPropagation()

    const {onChange} = this.props

		if (e.target.tagName === 'A') {
      let current = e.target.getAttribute('data-id')
      if(this.state.isActive == current) current = -1;
      this.setState({isActive: current})

      if (typeof onChange === 'function') {
        onChange(current)
      }
		}
	}

  render() {
    const tagsList = this.props.items.map((tag, index) => (
      <li key={index}>
        <a href="#" className={"be-post-tag" + (this.state.isActive == index ? " active" : "")} data-id={index}>
          {tag}
        </a>
      </li>
    ))

    return (
      <div className="tags_block clearfix">
        <ul onClick={this.handleChange}>
          {tagsList}
        </ul>
      </div>
    )
  }
}

export default TagsList
