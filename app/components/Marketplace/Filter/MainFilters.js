import React, {Component} from 'react'
import {connect} from 'react-redux'

import Dropdown from '../../common/Dropdown'
import Search from '../../common/Search'

const gens = [
  {value: -1, title: 'All gens'},
  {value: 0, title: 'Gen-0'},
  {value: 1, title: 'Gen-1'},
  {value: 2, title: 'Gen-2'},
  {value: 3, title: 'Gen-3'}
]

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (value) => {console.log(`Filter ${value}`)},
  handleSearch: (value) => {console.log(`Search ${value}`)}
})

const MainFilters = ({handleSearch, handleFilter}) => (
  <div className="container-fluid cd-main-content custom-container">
    <div className="row">
      <div className="col-md-2 left-feild">
        <Search onChange={handleSearch} />
      </div>
      <div className="col-md-10 ">
        <div className="for-be-dropdowns">
          <Dropdown icon="icon-creative" items={gens} value={0} onChange={handleFilter} />
          <Dropdown icon="icon-creative" items={gens} value={0} onChange={handleFilter} />
        </div>
      </div>
    </div>
  </div>
)

export default connect(null, mapDispatchToProps)(MainFilters)
