import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS"
export const RECEIVE_PHOTO = "RECEIVE_PHOTO"
export const REMOVE_PHOTO = "REMOVE_PHOTO"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const REMOVE_ERRORS = "REMOVE_ERRORS"

const receiveAllPhotos = payload => {
  // debugger
  return ({
    type: RECEIVE_ALL_PHOTOS,
    payload
  })
}

const receivePhoto = payload => {
  // debugger
  return ({
    type: RECEIVE_PHOTO,
    payload
  })

}

const removePhoto = photoId => ({
  type: REMOVE_PHOTO,
  photoId
})

const receiveErrors = errors => {
  return({
    type: RECEIVE_ERRORS,
    errors
  })
}


export const fetchPhotos = () => dispatch => {
  return (
    PhotoApiUtil.fetchPhotos()
      .then(payload => dispatch(receiveAllPhotos(payload
        )), errors => dispatch(receiveErrors(errors)))
  )
}

export const fetchPhoto = photoId => dispatch => {
  return (
    PhotoApiUtil.fetchPhoto(photoId)
      .then(payload => dispatch(receivePhoto(payload
        )), errors => dispatch(receiveErrors(errors)))
  )
}

export const uploadPhoto = photo => dispatch => {
  return (
    PhotoApiUtil.uploadPhoto(photo)
      .then(payload => dispatch(receivePhoto(payload
        )), errors => dispatch(receiveErrors(errors)))
  )
}

export const editPhoto = photo => dispatch => {
  return (
    PhotoApiUtil.editPhoto(photo)
      .then(payload => dispatch(receivePhoto(payload
        )), errors => dispatch(receiveErrors(errors)))
  )
}

export const deletePhoto = photoId => dispatch => {
  return (
    PhotoApiUtil.deletePhoto(photoId)
      .then(payload => dispatch(removePhoto(payload
        )), errors => dispatch(receiveErrors(errors)))
  )
}
