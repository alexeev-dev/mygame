import {MARKETPLACE_UPDATE_FILTER} from '../actions/marketplace'

const initialState = {
  filters: {
    search: "",
    gens: {id: 0, title: "All gens"}
  }
}

function updateFilters(filters, {filter, value}) {
  switch (filter) {
    case 'search':
    case 'gens':
      return {...filters, [filter]: value}
    default:
      return filters
  }
}

function marketplace(state = initialState, action) {
  switch (action.type) {
    case MARKETPLACE_UPDATE_FILTER:
      return {...state, filters: updateFilters(state.filters, action)}
    default:
      return state
  }
}

export default marketplace
