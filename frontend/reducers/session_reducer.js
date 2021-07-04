import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions'

const _nullSession = {
  currentUserId: null
}

const sessionReducer = (slice = _nullSession, action) => {
  Object.freeze(slice)
  let newSlice = Object.assign({}, slice)

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newSlice["currentUserId"] = action.user.id
      return newSlice
    case LOGOUT_CURRENT_USER:
      return _nullSession
    default:
      return slice
  }
}

export default sessionReducer;