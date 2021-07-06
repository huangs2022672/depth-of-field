import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions'

const _nullUser = Object.freeze ({
  currentUserId: null
})

const sessionReducer = (slice = _nullUser, action) => {
  Object.freeze(slice)
  // let newSlice = Object.assign({}, slice)

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: action.user.id}
      // newSlice[currentUserId] = action.user.id
      // return newSlice
    case LOGOUT_CURRENT_USER:
      return _nullUser
    default:
      return slice
  }
}

export default sessionReducer;