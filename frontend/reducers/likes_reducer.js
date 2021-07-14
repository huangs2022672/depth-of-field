import {
  RECEIVE_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../actions/like_actions'

const likesReducer = (slice ={}, action) => {
  Object.freeze(slice)
  let newSlice = Object.assign({}, slice)

  switch(action.type) {
    case RECEIVE_LIKES:
      return Object.assign({}, slice, action.payload.likes)
    case RECEIVE_LIKE:
      newSlice[action.payload.like.id] = action.payload.like
      return newSlice
    case REMOVE_LIKE:
      delete newSlice[action.likeId]
      return newSlice
    default:
      return slice
  }
}

export default likesReducer;
