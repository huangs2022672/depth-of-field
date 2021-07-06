import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';

const sessionErrorsReducer = (slice = [], action) => {
  Object.freeze(slice)
  // let newSlice = Object.assign({}, slice)

  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:       
      return action.errors
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return slice
  }
}

export default sessionErrorsReducer;