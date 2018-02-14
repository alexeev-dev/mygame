import React from 'react'

import UnicornsList from './UnicornsList'
import FiltersList from './FiltersList'
import MainFilters from './MainFilters'
import SideFilters from './SideFilters'

const Filter = () => (
  <section>
    <MainFilters />
    <FiltersList />
    <div className="container-fluid custom-container">
      <div className="row">
        <SideFilters />
        <UnicornsList />
      </div>
    </div>
  </section>
)

export default Filter
