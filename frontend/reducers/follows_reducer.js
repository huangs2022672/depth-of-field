import {
  RECEIVE_FOLLOWS,
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follow_actions'

const followsReducer = (slice ={}, action) => {
  Object.freeze(slice)
  let newSlice = Object.assign({}, slice)

  switch(action.type) {
    case RECEIVE_FOLLOWS:
      return Object.assign({}, slice, action.payload.follows)
    case RECEIVE_FOLLOW:
      debugger //7 createFollow
      if (action.payload.follow) {
        newSlice[action.payload.follow.id] = action.payload.follow
      }
      return newSlice
    case REMOVE_FOLLOW:
      debugger //7 deleteFollow
      delete newSlice[action.payload.follow.id]
      return newSlice
    default:
      return slice
  }
}

export default followsReducer;
