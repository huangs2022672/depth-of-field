import {
  RECEIVE_COMMENT_ERRORS,
  REMOVE_COMMENT_ERRORS
} from '../actions/comment_actions';

const commentErrorsReducer = (slice = [], action) => {
  Object.freeze(slice)
  // let newSlice = Object.assign({}, slice)

  switch(action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors
    case REMOVE_COMMENT_ERRORS:
      return [];
    default:
      return slice
  }
}

export default commentErrorsReducer;
