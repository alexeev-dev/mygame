import React, { Component } from 'react';

class Tags extends Component {
  constructor(props) {
    super(props)
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
    e.stopPropagation();
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

    const list = this.props.values.map((val) => 
    { if(val.id < 0) return;
      return (<li key={val.id}><a href="#" className={["be-post-tag", val.id == this.props.val.id ? " active" : ""].join("")} data-filter={val.id}>{val.value}</a> </li>)
    })

    return (
        <div className="tags_block clearfix">
          <ul onClick={this.handleChange}>
            {list}
          </ul>
        </div>
    );
  }
}

export default Tags;
