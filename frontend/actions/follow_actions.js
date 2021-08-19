import * as FollowApitUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
export const RECEIVE_FOLLOW_ERRORS = "RECEIVE_FOLLOW_ERRORS";
export const REMOVE_FOLLOW_ERRORS = "REMOVE_FOLLOW_ERRORS"

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

const removeFollow = payload => {
  return ({
    type: REMOVE_FOLLOW,
    payload
  })
}

const receiveErrors = errors => {
  return({
    type: RECEIVE_FOLLOW_ERRORS,
    errors
  })
}

export const removeFollowErrors = () => {
  return {
    type: REMOVE_FOLLOW_ERRORS,
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
  return (
    FollowApitUtil.createFollow(follow)
      .then(payload => {
        dispatch(receiveFollow(payload))
      }, errors => dispatch(receiveErrors(errors)))
  )
}

export const deleteFollow = followId => dispatch => {
  return (
    FollowApitUtil.deleteFollow(followId)
      .then(payload => {
        dispatch(removeFollow(payload))
      }, errors => dispatch(receiveErrors(errors)))
  )
}
