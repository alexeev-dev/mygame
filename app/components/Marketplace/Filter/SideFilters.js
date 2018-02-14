import React, {Component} from 'react'
import {connect} from 'react-redux'

import SideBlock from '../../common/SideBlock'
import SideMenu from '../../common/SideMenu'
import TagsList from '../../common/TagsList'
import SelectColor from '../../common/SelectColor'

const sideMenu = ['Fast', 'Swift', 'Snappy', 'Brisk', 'Plodding']
const popularTags = ['Nice', 'Gute', 'Usual', 'Just', 'Angry']

const mapDispatchToProps = (dispatch) => ({
  handleMenu: (value) => {console.log(`Menu: ${value}`)},
  handleTag: (value) => {console.log(`Tag: ${value}`)},
  handleColor: (value) => {console.log(`Color: ${value}`)}
})

const SideFilters = ({handleMenu, handleTag, handleColor}) => (
  <div className="col-md-2 left-feild">
    <SideBlock title="Coldown">
      <SideMenu items={sideMenu} value={0} onChange={handleMenu} />
    </SideBlock>

    <SideBlock title="Popular Tags">
      <TagsList items={popularTags} onChange={handleTag} />
    </SideBlock>

    <SideBlock title="More Filters">
      <SelectColor onChange={handleColor} />
    </SideBlock>
  </div>
)

export default connect(null, mapDispatchToProps)(SideFilters)
