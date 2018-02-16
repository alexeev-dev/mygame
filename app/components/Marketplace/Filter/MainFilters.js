import React, {Component} from 'react'
import {connect} from 'react-redux'

import Dropdown from '../../common/Dropdown'
import Search from '../../common/Search'

import {updateFilter} from '../../../actions/marketplace'

const gens = [
  'All gens',
  'Gen-0',
  'Gen-1',
  'Gen-2',
  'Gen-3'
]

const mapStateToProps = ({marketplace}) => {
  const {search, gens} = marketplace.filters
  return {
    searchValue: search,
    gensValue: gens.id
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (id, value) => {
    dispatch(updateFilter('gens', {id, value}))
  },
  handleSearch: (value) => {
    dispatch(updateFilter('search', value))
  }
})

const MainFilters = ({searchValue, gensValue, handleSearch, handleFilter}) => (
  <div className="container-fluid cd-main-content custom-container">
    <div className="row">
      <div className="col-md-2 left-feild">
        <Search value={searchValue} onChange={handleSearch} />
      </div>
      <div className="col-md-10 ">
        <div className="for-be-dropdowns">
          <Dropdown icon="icon-creative" items={gens} value={gensValue} onChange={handleFilter} />
          <Dropdown icon="icon-creative" items={gens} value={gensValue} onChange={handleFilter} />
        </div>
      </div>
    </div>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(MainFilters)
