import {MARKETPLACE_UPDATE_FILTER} from '../actions/marketplace'

const initialState = {
  filters: {
    search: "",
    sort: 0,
    strenth: 0,
    agility: 0,
    speed: 0,
    intelligence: 0,
    charisma: 0,
    gens: 0,
    fertility: 0,
    energy: 0,
    sideMenu: 0,
  }
}

function updateFilters(filters, {filter, value}) {
  switch (filter) {
    case 'search':
    case 'sort':
    case 'gens':
    case 'fertility':
    case 'energy':    
    case 'strenth':
    case 'agility':
    case 'speed':
    case 'intelligence':
    case 'charisma':
    case 'sideMenu':
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
