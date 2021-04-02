
const INITIAL_STATE = {
  user: { first_name: '', last_name: '', email: '' },
  token: null,
  isFetching: false,
  errors: {},
  role: null,
  loginError: {},
  openDrawer: false,
}

const userReducer = {
  LOGIN_USER: (state, { payload }) => ({
    ...state,
    isFetching: true,
  }),
  SET_USER_STATE: (state, { payload }) => ({
    ...state,
    ...payload
  }),
  LOGOUT_USER: (state, { payload }) => ({
    ...state,
    isFetching: true
  }),
  ACTION_DONE: (state, { key, data }) => ({
    ...state,
    [key]: data,
    isFetching: false,
    errors: {}
  }),
  AUTH_SUCCESS: (state, { type, ...params }) => ({
    ...state,
    ...params,
    isFetching: false,
    error: false,
  }),
  ADD_USER: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  RESET_USER: (state) => ({
    user: { first_name: '', last_name: '', email: '' },
    token: null,
    isFetching: false,
    errors: {},
    role: null
  })
}

const createReducer = (initialState, reducers) => (
  state = initialState,
  action,
) => {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
};

export default createReducer(INITIAL_STATE, userReducer);
