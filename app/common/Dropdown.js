import React, { Component } from 'react';

class Dropdown extends Component {

	constructor(props) {
		super(props)
		this.state = {id: 0, value: 'All Gens'};
		this.updateList = this.updateList.bind(this);
		this.toggleList = this.toggleList.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		this.updateList(this.props.defaultId);
	}

	updateList(id){
		let vals =	this.props.values.filter(val => val.id == id);
		if(vals.length > 0) this.setState(vals[0]);
	}
	
	toggleList(e){
		e.preventDefault();

		let cont = e.target;

		while(cont.tagName != 'DIV'){
			cont = cont.parentNode;
			if(cont.tagName == 'BODY') break;
		}

		if(typeof cont.classList != 'undefined'){
			cont.classList.toggle('active');
		}else if(typeof cont.className != 'undefined'){
			if(cont.className.indexOf('active') !== -1){
				cont.className = cont.className.replace(/(\s)?active/i, '');
			}else{
				cont.className += ' active';
			}
		}
	}

  handleChange(e){
		if(e.target.tagName == 'LI'){
			this.updateList(e.target.data.filter);
		}else if(e.target.tagName == 'A'){
			let eId = e.target.parentNode.getAttribute('data-filter');
			this.updateList(eId);
		}
    try{
      this.props.onChange(this.getState());
    }catch(e){
      //console.log(e);
    }
	}

  render() {

    const dropList = this.props.values.map((val) => (
      <li key={val.id} className={["filter", val.id == this.state.id ? " active" : ""].join("")} data-filter={val.id}>
				<a>{val.value}</a>
			</li>
    ))

    return (
			<div className="be-drop-down" onClick={this.toggleList}>
				<i className={this.props.iconClass}></i>
				<span className="be-dropdown-content">{this.state.value}
				</span>
				<ul className="drop-down-list" onClick={this.handleChange}>
					{dropList}
				</ul>
			</div>
    );
  }
}

export default Dropdown;
