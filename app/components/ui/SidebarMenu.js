import React, { Component } from 'react';

class SidebarMenu extends Component {

	constructor(props) {
		super(props)
		this.state = {id: -1, value: 'All'};
		this.updateActive = this.updateActive.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	updateActive(id){
		const vals =	this.props.values.filter(val => val.id == id);
		if(vals.length > 0){
			this.setState(vals[0]);
			return vals[0];
		}
		return null;
	}

	handleChange(e){
		e.preventDefault();
		let val;
		if(e.target.tagName == 'A'){
			const eId = e.target.getAttribute('data-filter');
			val = this.updateActive(eId);
		}
    try{
      this.props.onChange(val);
    }catch(e){
      //console.log(e);
    }
	}

	render() {

		const menuList = this.props.values.map((val) => (
			<a key={val.id} className={["filter", val.id == this.state.id ? " active" : ""].join("")} data-filter={val.id}>
				{val.value}
			</a>

		))

		return (

			<div className="creative_filds_block">
				<div className="ul" onClick={this.handleChange}>
				{menuList}
				</div>
			</div>

		);
	}
}

export default SidebarMenu;
