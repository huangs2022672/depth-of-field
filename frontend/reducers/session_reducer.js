import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';
import {
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follow_actions';
import {
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../actions/like_actions';

const _nullUser = Object.freeze ({
  currentUserId: null,
  currentFollows: {},
  currentLikes: {}
})

const sessionReducer = (slice = _nullUser, action) => {
  Object.freeze(slice)
  let newSlice = Object.assign({}, slice)

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      // return { currentUserId: action.user.id }
      newSlice["currentUserId"] = action.user.id
      return newSlice
    case LOGOUT_CURRENT_USER:
      return _nullUser
    case RECEIVE_FOLLOW:
      if (action.payload.follow) {
        newSlice.currentFollows[action.payload.follow.followee_id] = action.payload.follow.id;
      }
      return newSlice
    case REMOVE_FOLLOW:
      delete newSlice.currentFollows[action.payload.follow.followee_id]
      return newSlice
    case RECEIVE_LIKE:
      if (action.payload.like) {
        newSlice.currentLikes[action.payload.like.photo_id] = action.payload.like.id;
      }
      return newSlice
    case REMOVE_LIKE:
      delete newSlice.currentLikes[action.payload.like.photo_id]
      return newSlice
    default:
      return slice
  }
}

export default sessionReducer;
