import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';
import {
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follow_actions';

const _nullUser = Object.freeze ({
  currentUserId: null,
  currentFollows: {}
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
      // debugger //7 createFollow
      if (action.payload.follow) {
        newSlice.currentFollows[action.payload.follow.followee_id] = action.payload.follow.id;
      }
      return newSlice
    case REMOVE_FOLLOW:
      // debugger //7 deleteFollow
      delete newSlice.currentFollows[action.payload.follow.followee_id]
      return newSlice
    default:
      return slice
  }
}

export default sessionReducer;
