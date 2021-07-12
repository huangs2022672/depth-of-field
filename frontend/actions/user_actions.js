import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER"

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const fetchUser = (userId) => dispatch => {
  return (
    UserApiUtil.fetchUser(userId)
      .then(user => dispatch(receiveUser(user)))
  )
}
