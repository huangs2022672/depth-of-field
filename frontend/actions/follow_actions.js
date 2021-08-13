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
  // debugger //6 createFollow
  return ({
    type: RECEIVE_FOLLOW,
    payload
  })
}

const removeFollow = payload => {
  // debugger //6 deleteFollow
  return ({
    type: REMOVE_FOLLOW,
    payload
  })
}

const receiveErrors = errors => {
  return({
    type: RECEIVE_ERRORS,
    errors
  })
}

export const removeFollowErrors = () => {
  return {
    type: REMOVE_ERRORS,
  }
}

export const fetchFollows = (fetchWho, userId) => dispatch => {

  return (
    FollowApitUtil.fetchFollows(fetchWho, userId)
      .then(payload => dispatch(receiveFollows(payload
        )), errors => dispatch(receiveErrors(errors)))
  )
}

export const fetchFollow = (followerId, followeeId) => dispatch => {
  return (
    FollowApitUtil.fetchFollow(followerId, followeeId)
      .then(payload => {
        dispatch(receiveFollow(payload))
      }, errors => dispatch(receiveErrors(errors)))
  )
}

export const createFollow = follow => dispatch => {
  // debugger //2 createFollow
  return (
    FollowApitUtil.createFollow(follow)
      .then(payload => {
        // debugger //5 createFollow
        dispatch(receiveFollow(payload))
      }, errors => dispatch(receiveErrors(errors)))
  )
}

export const deleteFollow = followId => dispatch => {
  // debugger //2 deleteFollow
  return (
    FollowApitUtil.deleteFollow(followId)
      .then(payload => {
        // debugger //5 deleteFollow
        dispatch(removeFollow(payload))
      }, errors => dispatch(receiveErrors(errors)))
  )
}
