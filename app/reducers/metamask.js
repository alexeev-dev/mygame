import {TOGGLE_METAMASK, SET_METAMASK_ACCOUNT} from '../actions/metamask'

const initialState = {
  account: undefined,
  isOn: false
}

function metamaskReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_METAMASK:
      return Object.assign({}, state, {
        isOn: action.state
      })
    case SET_METAMASK_ACCOUNT:
      return Object.assign({}, state, {
        account: action.account
      })
    default:
      return state
  }
}

export default metamaskReducer
