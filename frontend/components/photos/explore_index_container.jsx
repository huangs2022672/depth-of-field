import { connect } from "react-redux";
import ExplorerIndex from "./explore_index";
import { fetchPhotos } from "../../actions/photo_actions";

const mSTP = (state, ownProps) => {
  return {
    photos: Object.values(state.entities.photos).reverse(),
    currentUserId: state.session.currentUserId,
    likes: Object.values(state.entities.likes),
    users: state.entities.users
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos())
  }
}

export default connect(mSTP, mDTP)(ExplorerIndex)
