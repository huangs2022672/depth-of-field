import { connect } from "react-redux";
import PhotoShow from "./photo_show";
import { fetchPhoto, editPhoto, deletePhoto } from "../../actions/photo_actions";

const mSTP = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.match.params.photoId]
  const user = photo ? state.entities.users[photo.uploader_id] : null
  return {
    photo,
    user
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
