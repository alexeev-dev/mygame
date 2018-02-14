import React, { Component } from 'react'

class SidebarMenu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			current: props.value
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		e.preventDefault()
		e.stopPropagation()

		const {items, onChange} = this.props

		if(e.target.tagName == 'A'){
			const current = parseInt(e.target.getAttribute('data-id'))
			this.setState({current})
			if (typeof onChange === 'function') {
				onChange(items[current])
			}
		}
	}

	render() {
		const {current} = this.state
		const {items} = this.props

		const menuList = items.map((value, index) => (
			<a key={value} className={"filter" + (index === current ? " active" : "")} data-id={index}>
				{value}
			</a>
		))

		return (
			<div className="creative_filds_block">
				<div className="ul" onClick={this.handleChange}>
					{menuList}
				</div>
			</div>
		)
	}
}

export default SidebarMenu
