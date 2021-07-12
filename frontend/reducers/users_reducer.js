import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions'
import { RECEIVE_ALL_PHOTOS } from '../actions/photo_actions';

const usersReducer = (slice = {}, action) => {
  Object.freeze(slice)
  let newSlice = Object.assign({}, slice)

  switch(action.type) {
    case RECEIVE_ALL_PHOTOS:
      return Object.assign({}, slice, action.payload.users)
    case RECEIVE_CURRENT_USER:
      newSlice[action.user.id] = action.user
      return newSlice
    case RECEIVE_PHOTO:
      newSlice[action.payload.user.id] = action.payload.user
      return newSlice
    case RECEIVE_USER:
      newSlice[action.user.id] = action.user
      return newSlice
    default:
      return slice
  }
}

export default usersReducer;
