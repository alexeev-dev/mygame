import React, { Component } from 'react'

class TagsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: props.items.map(tag => ({tag, isActive: false}))
    }
		this.handleChange = this.handleChange.bind(this)
  }

	handleChange(e){
    e.preventDefault()
    e.stopPropagation()

    const {onChange} = this.props

		if (e.target.tagName === 'A') {
			const current = e.target.getAttribute('data-id')

      this.setState(prev => {
        const tags = prev.tags.concat()
        tags[current].isActive = !prev.tags[current].isActive
        return {tags}
      })

      if (typeof onChange === 'function') {
        onChange(this.state.tags[current].tag)
      }
		}
	}

  render() {
    const tagsList = this.state.tags.map(({tag, isActive}, index) => (
      <li key={tag}>
        <a href="#" className={"be-post-tag" + (isActive ? " active" : "")} data-id={index}>
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
