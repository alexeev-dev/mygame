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

const sortBy = [
  'likes',
  'popular',
  'comments',
]

const fertility = ['fast', 'swift', 'snapy', 'brisk', 'plodding', 'slow', 'sluggish', 'catalonic'];

const statsOpts = type => {return [0,1,2,3,4,5,6,7,8,9].map(val => {return type + '-' + val})};

const mapStateToProps = ({marketplace}) => {
  const {search, sort, gens, fertility, energy, ...stats, } = marketplace.filters
  return {
    searchValue: search,
    sortValue: sort,
    gensValue: gens,
    fertilityValue: fertility,
    energyValue: energy,
    strenthValue : stats['strenth'],
    agilityValue : stats['agility'],
    speedValue : stats['speed'],
    intelligenceValue : stats['intelligence'],
    charismaValue : stats['charisma'],
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (type) => (value) => {
    dispatch(updateFilter(type, value))
  },
  handleSearch: (value) => {
    dispatch(updateFilter('search', value))
  }
})

const MainFilters = (
  {searchValue, sortValue, strenthValue, agilityValue, speedValue, intelligenceValue, charismaValue,  gensValue, fertilityValue, energyValue, handleSearch, handleFilter}
) => (
  <div className="container-fluid cd-main-content custom-container">
    <div className="row">
      <div className="col-md-2 left-feild">
        <Search value={searchValue} onChange={handleSearch} />
        <Dropdown icon="icon-creative" items={sortBy} value={sortValue} onChange={handleFilter('sort')} />
      </div>
      <div className="col-md-10 ">
        <div className="for-be-dropdowns">
          <Dropdown icon="icon-creative" items={statsOpts('strenth')} value={strenthValue} onChange={handleFilter('strenth')} />
          <Dropdown icon="icon-creative" items={statsOpts('agility')} value={agilityValue} onChange={handleFilter('agility')} />
          <Dropdown icon="icon-creative" items={statsOpts('speed')} value={speedValue} onChange={handleFilter('speed')} />
          <Dropdown icon="icon-creative" items={statsOpts('intelligence')} value={intelligenceValue} onChange={handleFilter('intelligence')} />
          <Dropdown icon="icon-creative" items={statsOpts('charisma')} value={charismaValue} onChange={handleFilter('charisma')} />
          <Dropdown icon="icon-creative" items={gens} value={gensValue} onChange={handleFilter('gens')} />
          <Dropdown icon="icon-creative" items={fertility} value={fertilityValue} onChange={handleFilter('fertility')} />
          <Dropdown icon="icon-creative" items={fertility} value={energyValue} onChange={handleFilter('energy')} />
        </div>
      </div>
    </div>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(MainFilters)
