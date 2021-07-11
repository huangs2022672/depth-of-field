import { connect } from "react-redux";
import PhotoUpload from "./photo_upload";
import { uploadPhoto } from "../../actions/photo_actions";

const mSTP = (state, ownProps) => {
  return {
    currentUserId: state.session.currentUserId
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    uploadPhoto: (photo) => dispatch(uploadPhoto(photo)),
  }
}

export default connect(mSTP, mDTP)(PhotoUpload)
