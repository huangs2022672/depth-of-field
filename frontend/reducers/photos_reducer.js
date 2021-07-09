import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO
} from '../actions/photo_actions'

const photosReducer = (slice = {}, action) => {
  Object.freeze(slice)
  let newSlice = Object.assign({}, slice)

  switch(action.type) {
    case RECEIVE_ALL_PHOTOS:
      return action.photos
    case RECEIVE_PHOTO:
      newSlice[action.photo.id] = action.photo
      return newSlice
    case REMOVE_PHOTO:
      delete newSlice[action.photoId]
      return newSlice
    default:
      return slice
  }
}

export default photosReducer;