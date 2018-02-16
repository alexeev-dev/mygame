import {combineReducers} from 'redux'
import accountReducer from './account'
import marketplace from './marketplace'
import metamaskReducer from './metamask'
import loginPopupReducer from './login-popup'

export default combineReducers({
  marketplace: marketplace,
  account: accountReducer,
  metamask: metamaskReducer,
  loginPopup: loginPopupReducer
})
