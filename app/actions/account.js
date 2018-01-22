export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const UPDATE = 'UPDATE'

export function login(account) {
  return {type: LOGIN, account}
}

export function logout() {
  return {type: LOGOUT}
}

export function update(account) {
  return {type: UPDATE, account}
}
