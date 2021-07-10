import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS"
export const RECEIVE_PHOTO = "RECEIVE_PHOTO"
export const REMOVE_PHOTO = "REMOVE_PHOTO"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

const receiveAllPhotos = (photos) => {
  // debugger
  return ({
    type: RECEIVE_ALL_PHOTOS,
    photos
  })
}


const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
})

const removePhoto = (photoId) => ({
  type: REMOVE_PHOTO,
  photoId
})

const receiveErrors = (errors) => {
  // debugger
  return({
    type: RECEIVE_ERRORS,
    errors
  })
}


export const fetchPhotos = () => dispatch => {
  return (
    PhotoApiUtil.fetchPhotos()
      .then(photos => dispatch(receiveAllPhotos(photos
        )), errors => dispatch(receiveErrors(errors)))
  )
}

export const fetchPhoto = (photoId) => dispatch => {
  return (
    PhotoApiUtil.fetchPhoto(photoId)
      .then(photo => dispatch(receivePhoto(photo
        )), errors => dispatch(receiveErrors(errors)))
  )
}

export const uploadPhoto = (photo) => dispatch => {
  return (
    PhotoApiUtil.uploadPhoto(photo)
      .then(payload => dispatch(receivePhoto(payload
        )), errors => dispatch(receiveErrors(errors)))
  )
}

export const editPhoto = (photo) => dispatch => {
  return (
    PhotoApiUtil.editPhoto(photo)
      .then(payload => dispatch(receivePhoto(payload
        )), errors => dispatch(receiveErrors(errors)))
  )
}

export const deletePhoto = (photoId) => dispatch => {
  return (
    PhotoApiUtil.deletePhoto(photoId)
      .then(payload => dispatch(removePhoto(payload
        )), errors => dispatch(receiveErrors(errors)))
  )
}
