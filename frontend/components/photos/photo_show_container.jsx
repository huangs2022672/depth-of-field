import { connect } from "react-redux";
import PhotoShow from "./photo_show";
import { fetchPhoto, editPhoto, deletePhoto } from "../../actions/photo_actions";

const mSTP = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.match.params.photoId]
  // !photo ? fetchPhoto(ownProps.match.params.photoId) : null
  const user = photo ? state.entities.users[photo.uploader_id] : null
  const comments = Object.values(state.entities.comments)
  const currentUserId = state.session.currentUserId
  // debugger
  return {
    photo,
    user,
    comments,
    currentUserId
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
    editPhoto: (photo) => dispatch(editPhoto(photo)),
    deletePhoto: (photoId) => dispatch(deletePhoto(photoId))
  }
}

export default connect(mSTP, mDTP)(PhotoShow)
