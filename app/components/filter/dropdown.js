import React, { Component } from 'react';

class Dropdown extends Component {

  render() {

    return (
			<div className="be-drop-down">
				<i className="icon-creative"></i>
				<span className="be-dropdown-content">All Gens
				</span>
				<ul className="drop-down-list">
					<li className="filter" data-filter=".category-4"><a>All Gens</a></li>
					<li className="filter" data-filter=".category-5"><a>Gen - 0</a></li>
					<li className="filter" data-filter=".category-1"><a>Gen - 1</a></li>
				</ul>
			</div>
    );
  }
}

export default Dropdown;
