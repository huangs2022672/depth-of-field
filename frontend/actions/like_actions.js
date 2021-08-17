import * as LikeApitUtil from '../util/like_api_util';

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";
export const REMOVE_LIKE_ERRORS = "REMOVE_LIKE_ERRORS"

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

const removeLike = payload => {

  return ({
    type: REMOVE_LIKE,
    payload
  })
}

const receiveErrors = errors => {
  return ({
    type: RECEIVE_LIKE_ERRORS,
    errors
  })
}

export const removeLikeErrors = () => {
  return {
    type: REMOVE_LIKE_ERRORS,
  }
}

export const fetchLikes = (fetchWhich, whichId) => dispatch => {

  return (
    LikeApitUtil.fetchLikes(fetchWhich, whichId)
      .then(payload => dispatch(receiveLikes(payload
      )), errors => dispatch(receiveErrors(errors)))
  )
}

export const fetchLike = (likerId, photoId) => dispatch => {

  return (
    LikeApitUtil.fetchLike(likerId, photoId)
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
