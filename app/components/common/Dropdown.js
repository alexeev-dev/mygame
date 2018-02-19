import React, { Component } from 'react';

const getValueId = ({ target }) => {
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
			isOpen: false
		}
		this.toggleList = this.toggleList.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	toggleList(e) {
		e.preventDefault();
		e.stopPropagation();

		this.setState(prev => (this.state.isOpen = !prev.isOpen))
	}

	handleChange(e) {
		const { items, onChange } = this.props
		const current = getValueId(e)
		if (typeof onChange === 'function') {
			onChange(current, items[current])
		}
	}

	render() {
		const { icon, items, value } = this.props
		const { isOpen } = this.state

		const dropList = items.map((item, index) => (
			<li key={index} className={"filter" + (index === value ? " active" : "")} data-id={index}>
				<a>{item}</a>
			</li>
		))

		return (
			<div className={"be-drop-down closeall" + (isOpen ? " active" : "")} onClick={this.toggleList}>
				<i className={icon}></i>
				<span className="be-dropdown-content">{items[value]}
				</span>
				<ul className="drop-down-list" onClick={this.handleChange}>
					{dropList}
				</ul>
			</div>
		)
	}
}

export default Dropdown
