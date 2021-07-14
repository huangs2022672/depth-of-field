import {
  RECEIVE_PHOTO_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions'

const commentsReducer = (slice ={}, action) => {
  Object.freeze(slice)
  let newSlice = Object.assign({}, slice)

  switch(action.type) {
    case RECEIVE_PHOTO_COMMENTS:
      return Object.assign({}, slice, action.payload.comments)
    case RECEIVE_COMMENT:
      newSlice[action.payload.comment.id] = action.payload.comment
      return newSlice
    case REMOVE_COMMENT:
      delete newSlice[action.commentId]
      return newSlice
    default:
      return slice
  }
}

export default commentsReducer;
