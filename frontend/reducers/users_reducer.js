import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
  RECEIVE_PHOTO,
  RECEIVE_ALL_PHOTOS
} from '../actions/photo_actions'
import {
  RECEIVE_PHOTO_COMMENTS,
  RECEIVE_COMMENT
} from '../actions/comment_actions'
// import {
//   RECEIVE_FOLLOWS,
//   RECEIVE_FOLLOW
// } from '../actions/follow_actions';
// import {
//   RECEIVE_LIKES,
//   RECEIVE_LIKE
// } from '../actions/like_actions';



const usersReducer = (slice = {}, action) => {
  Object.freeze(slice)
  let newSlice = Object.assign({}, slice)

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newSlice[action.user.id] = action.user
      return newSlice
    case RECEIVE_USER:
      newSlice[action.user.id] = action.user
      return newSlice

    case RECEIVE_ALL_PHOTOS:
      return Object.assign({}, slice, action.payload.users)
    case RECEIVE_PHOTO:
      newSlice[action.payload.user.id] = action.payload.user
      return newSlice

    case RECEIVE_PHOTO_COMMENTS:
      return Object.assign({}, slice, action.payload.users)
    case RECEIVE_COMMENT:
      newSlice[action.payload.user.id] = action.payload.user
      return newSlice

    // case RECEIVE_FOLLOWS:
    //   return Object.assign({}, slice, action.payload.users)
    // case RECEIVE_FOLLOW:
    //   newSlice[action.payload.user.id] = action.payload.user
    //   return newSlice

    // case RECEIVE_LIKES:
    //   return Object.assign({}, slice, action.payload.users)
    // case RECEIVE_LIKE:
    //   newSlice[action.payload.user.id] = action.payload.user
    //   return newSlice

    default:
      return slice
  }
}

export default usersReducer;
