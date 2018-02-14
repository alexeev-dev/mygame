import React, { Component } from 'react';

const getValueId = ({target}) => {
	if (target.tagName === 'LI') {
		return target.getAttribute('data-id')
	} else if (target.tagName === 'A') {
		return target.parentNode.getAttribute('data-id')
	}
}

class Dropdown extends Component {
	constructor(props) {
		super(props)
		this.state = {
			current: props.value,
			isOpen: false
		}
		this.toggleList = this.toggleList.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	toggleList(e){
		e.preventDefault()
		e.stopPropagation()
		this.setState(prev => ({isOpen: !prev.isOpen}))
	}

  handleChange(e){
		const {items, onChange} = this.props
		const current = getValueId(e)
		this.setState({current})
		if (typeof onChange === 'function') {
			onChange(items[current].value)
		}
	}

  render() {
		const {isOpen, current} = this.state
		const {icon, items} = this.props

		const dropList = items.map(({value, title}, index) => (
			<li key={value} className={"filter" + (index === current ? " active" : "")} data-id={index}>
				<a>{title}</a>
			</li>
		))

    return (
			<div className={"be-drop-down closeall" + (isOpen ? " active" : "")} onClick={this.toggleList}>
				<i className={icon}></i>
				<span className="be-dropdown-content">{items[current].title}
				</span>
				<ul className="drop-down-list" onClick={this.handleChange}>
					{dropList}
				</ul>
			</div>
    )
  }
}

export default Dropdown
