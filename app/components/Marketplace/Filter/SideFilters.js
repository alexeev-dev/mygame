import React, {Component} from 'react'
import {connect} from 'react-redux'

import {updateFilter} from '../../../actions/marketplace'

import SideBlock from '../../common/SideBlock'
import SideMenu from '../../common/SideMenu'
import TagsList from '../../common/TagsList'
import SelectColor from '../../common/SelectColor'

//const sideMenu = ['Fast', 'Swift', 'Snappy', 'Brisk', 'Plodding']
const sideMenu = ['All', 'For sale', 'Siring']
const popularTags = ['Nice', 'Gute', 'Usual', 'Just', 'Angry']

const mapStateToProps = ({marketplace}) => {
  const {sideMenu} = marketplace.filters
  return {
    sideMenuValue: sideMenu,
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (type) => (value) => {
    dispatch(updateFilter(type, value))
  },
  handleTag: (value) => {console.log(`Tag: ${value}`)},
  handleColor: (value) => {console.log(`Color: ${value}`)}
})

const SideFilters = ({sideMenuValue, handleFilter, handleTag, handleColor}) => (
  <div className="col-md-2 left-feild">
    <SideBlock title="Get yous">
      <SideMenu items={sideMenu} value={sideMenuValue} onChange={handleFilter('sideMenu')} />
    </SideBlock>

    <SideBlock title="Popular Tags">
      <TagsList items={popularTags} onChange={handleTag} />
    </SideBlock>

    <SideBlock title="More Filters">
      <SelectColor onChange={handleColor} />
    </SideBlock>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(SideFilters)
