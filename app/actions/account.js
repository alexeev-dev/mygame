export const ACCOUNT_LOGIN = 'ACCOUNT_LOGIN'
export const ACCOUNT_LOGOUT = 'ACCOUNT_LOGOUT'
export const ACCOUNT_UPDATE = 'ACCOUNT_UPDATE'

export function accountLogin(name, wallet) {
  return {type: ACCOUNT_LOGIN, name, wallet}
}

export function accountLogout() {
  return {type: ACCOUNT_LOGOUT}
}

export function accountUpdate(name, wallet) {
  return {type: ACCOUNT_UPDATE, name, wallet}
}
