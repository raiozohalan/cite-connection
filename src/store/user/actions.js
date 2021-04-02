export const setUserState = (payload) => ({
  type: 'SET_USER_STATE',
  payload,
})

export const loginUser = (payload) => ({
  type: 'LOGIN_USER',
  payload,
})

export const logoutUser = (payload) => ({
  type: 'LOGOUT_USER',
  payload,
})

export const authSuccess = (payload) => ({
  type: 'AUTH_SUCCESS',
  ...payload,
})
export const actionDone = payload => ({
  type: 'ACTION_DONE',
  payload,
})

export const addUser = payload => ({
  type: 'ADD_USER',
  payload,
})

export const deleteUser = payload => ({
  type: 'DELETE_USER',
  payload
})

export const resetUser = payload => ({
  type: 'RESET_USER',
  payload
})