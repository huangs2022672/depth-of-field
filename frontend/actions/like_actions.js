import * as LikeApitUtil from '../util/like_api_util';

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS"

const receiveLikes = payload => {

  return ({
    type: RECEIVE_LIKES,
    payload
  })
}

const receiveLike = payload => {

  return ({
    type: RECEIVE_LIKE,
    payload
  })
}

const removeLike = likeId => {

  return ({
    type: REMOVE_LIKE,
    likeId
  })
}

const receiveErrors = errors => {
  return ({
    type: RECEIVE_ERRORS,
    errors
  })
}

export const removeLikeErrors = () => {
  return {
    type: REMOVE_ERRORS,
  }
}

export const fetchLikes = fetchWho => dispatch => {

  return (
    LikeApitUtil.fetchLikes(fetchWho)
      .then(payload => dispatch(receiveLikes(payload
      )), errors => dispatch(receiveErrors(errors)))
  )
}

export const fetchLike = likeId => dispatch => {

  return (
    LikeApitUtil.fetchLike(likeId)
      .then(payload => dispatch(receiveLike(payload
      )), errors => dispatch(receiveErrors(errors)))
  )
}

export const createLike = like => dispatch => {

  return (
    LikeApitUtil.createLike(like)
      .then(payload => dispatch(receiveLike(payload
      )), errors => dispatch(receiveErrors(errors)))
  )
}

export const deleteLike = likeId => dispatch => {

  return (
    LikeApitUtil.deleteLike(likeId)
      .then(payload => dispatch(removeLike(payload
      )), errors => dispatch(receiveErrors(errors)))
  )
}
