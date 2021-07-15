import {
  RECEIVE_ERRORS,
  REMOVE_ERRORS
} from '../actions/comment_actions';

const commentErrorsReducer = (slice = [], action) => {
  Object.freeze(slice)
  // let newSlice = Object.assign({}, slice)

  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors
    case REMOVE_ERRORS:
      return [];
    default:
      return slice
  }
}

export default commentErrorsReducer;
