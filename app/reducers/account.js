import {LOGIN, LOGOUT, UPDATE} from '../actions/account'

function accountReducer(state = undefined, action) {
  switch (action.type) {
    case LOGIN:
      return action.account
    case LOGUT:
      return undefined
    case UPDATE:
      return action.account
    default:
      return state
  }
}

export default accountReducer
