import * as CommentApitUtil from '../util/comment_api_util';

export const RECEIVE_PHOTO_COMMENTS = "RECEIVE_PHOTO_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_NEW_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS"

const receivePhotoComments = payload => {

  return ({
    type: RECEIVE_PHOTO_COMMENTS,
    payload
  })
}

const receiveComment = payload => {

  return ({
    type: RECEIVE_COMMENT,
    payload
  })
}

const removeComment = commentId => {

  return ({
    type: REMOVE_COMMENT,
    commentId
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

export const fetchPhotoComments = photoId => dispatch => {

  return (
    CommentApitUtil.fetchPhotoComments(photoId)
      .then(payload => dispatch(receivePhotoComments(payload
        )), errors => dispatch(receiveErrors(errors.responseJSON)))
  )
}

export const fetchComment = commentId => dispatch => {

  return (
    CommentApitUtil.fetchComment(commentId)
      .then(payload => dispatch(receiveComment(payload
        )), errors => dispatch(receiveErrors(errors.responseJSON)))
  )
}

export const createComment = comment => dispatch => {

  return (
    CommentApitUtil.createComment(comment)
      .then(payload => dispatch(receiveComment(payload
        )), errors => dispatch(receiveErrors(errors.responseJSON)))
  )
}

export const editComment = comment => dispatch => {

  return (
    CommentApitUtil.editComment(comment)
      .then(payload => dispatch(receiveComment(payload
        )), errors => dispatch(receiveErrors(errors.responseJSON)))
  )
}

export const deleteComment = commentId => dispatch => {

  return (
    CommentApitUtil.deleteComment(commentId)
      .then(payload => dispatch(removeComment(payload.comment.id
        )), errors => dispatch(receiveErrors(errors.responseJSON)))
  )
}
