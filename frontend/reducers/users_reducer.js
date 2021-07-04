import {
  RECEIVE_USER
} from '../actions/user_actions'

const usersReducer = (slice = {}, action) => {
  Object.freeze(slice)
  let newSlice = Object.assign({}, slice)

  switch(action.type) {
    case RECEIVE_USER:
      newSlice[action.user.id] = action.user
      return newSlice
    default:
      return slice
  }
}

export default usersReducer;