import React, { Component } from 'react';

class Dropdown extends Component {

	constructor(props) {
		super(props)
		this.state = {
			active: false,
		};
		this.updateActive = this.updateActive.bind(this);
		this.toggleList = this.toggleList.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		//this.updateActive(this.props.propId);
	}

	updateActive(id){
		const vals =	this.props.values.filter(val => val.id == id);
		if(vals.length > 0){
			this.setState(vals[0]);
			return vals[0];
		}
		return null;
	}
	
	toggleList(e){
		e.preventDefault();
		e.stopPropagation();

		this.setState({active: !this.state.active});
	}

  handleChange(e){
		let val;
		if(e.target.tagName == 'LI'){
			this.updateActive(e.target.data.filter);
		}else if(e.target.tagName == 'A'){
			const eId = e.target.parentNode.getAttribute('data-filter');
			val = this.updateActive(eId);
		}
    try{
			this.props.onChange(val);
    }catch(e){
      //console.log(e);
    }
	}

  render() {
    const dropList = this.props.values.map((val) => (
      <li key={val.id} className={["filter", val.id == this.props.val.id ? " active" : ""].join("")} data-filter={val.id}>
				<a>{val.value}</a>
			</li>
    ))

    return (
			<div className={["be-drop-down closeall", this.state.active ? " active" : ""].join("")} onClick={this.toggleList}>
				<i className={this.props.iconClass}></i>
				<span className="be-dropdown-content">{this.props.val.value}
				</span>
				<ul className="drop-down-list" onClick={this.handleChange}>
					{dropList}
				</ul>
			</div>
    );
  }
}

export default Dropdown;
