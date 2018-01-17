import {ACCOUNT_LOGIN, ACCOUNT_LOGOUT, ACCOUNT_UPDATE} from '../actions/account'

const initialState = {
  account: {
    isLoggedIn: false
  }
}

function unicornApp(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_LOGIN:
      return Object.assign({}, state, {
        account: {
          isLoggedIn: true,
          name: action.name,
          wallet: action.wallet
        }
      })
    case ACCOUNT_LOGOUT:
      return Object.assign({}, state, {
        account: {
          isLoggedIn: false
        }
      })
    case ACCOUNT_UPDATE:
      return Object.assign({}, state, {
        account: {
          isLoggedIn: true,
          name: action.name,
          wallet: action.wallet
        }
      })
    default:
      return state
  }
}

export default unicornApp
