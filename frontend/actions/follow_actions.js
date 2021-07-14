import * as FollowApitUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS"

const receiveFollows = payload => {

  return ({
    type: RECEIVE_FOLLOWS,
    payload
  })
}

const receiveFollow = payload => {

  return ({
    type: RECEIVE_FOLLOW,
    payload
  })
}

const removeFollow = followId => {

  return ({
    type: REMOVE_FOLLOW,
    followId
  })
}

const receiveErrors = errors => {
  return({
    type: RECEIVE_ERRORS,
    errors
  })
}

export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS,
  }
}

export const fetchFollows = fetchWho => dispatch => {

  return (
    FollowApitUtil.fetchFollows(fetchWho)
      .then(payload => dispatch(receiveFollows(payload
        )), errors => dispatch(receiveErrors(errors)))
  )
}

export const fetchFollow = followId => dispatch => {

  return (
    FollowApitUtil.fetchFollow(followId)
      .then(payload => dispatch(receiveFollow(payload
        )), errors => dispatch(receiveErrors(errors)))
  )
}

export const createFollow = follow => dispatch => {

  return (
    FollowApitUtil.createFollow(follow)
      .then(payload => dispatch(receiveFollow(payload
        )), errors => dispatch(receiveErrors(errors)))
  )
}

export const deleteFollow = followId => dispatch => {

  return (
    FollowApitUtil.deleteFollow(followId)
      .then(payload => dispatch(removeFollow(payload
        )), errors => dispatch(receiveErrors(errors)))
  )
}
