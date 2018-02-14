import React, {Component} from 'react'
import {connect} from 'react-redux'

import FilterButton from './FilterButton'

const ClearButton = ({onClick}) => (
  <a className="btn color-1 size-3 hover-10" onClick={onClick}>
    <i className="fa fa-trash-o"></i>clear all filters
  </a>
)

const mapStateToProps = (state) => {
  return {
    filters: [
      {type: 'gen', value: 'Gen-1'},
      {type: 'color', value: '#ff8040'}
    ]
  }
}

class FiltersList extends Component {
  constructor(props) {
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleClear() {
    console.log('Clear all filters')
  }

  handleRemove(type, value) {
    console.log(`Removing: ${type}, ${value}`)
  }

  render() {
    const filterButtons = this.props.filters.map(({type, value}) => (
      <FilterButton
        key={type + value}
        type={type}
        value={value}
        onClick={this.handleRemove}
      />
    ))

    return (
      <div className="s_keywords">
        <div className="container-fluid custom-container">
          <ClearButton onClick={this.handleClear} />
          {filterButtons}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(FiltersList)
