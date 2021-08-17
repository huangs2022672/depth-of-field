import { connect } from "react-redux";
import LikeIcon from "./like_icon";
import {
  createLike,
  deleteLike,
  fetchLike,
  fetchLikes
} from '../../actions/like_actions';

const mSTP = (state, ownProps) => {
  // debugger //8 currentLikes gets updated
  return {
    // currentUserId: state.session.currentUserId,
    currentLikes: state.session.currentLikes
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    createLike: like => dispatch(createLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    fetchLikes: (fetchWhich, whichId) => dispatch(fetchLikes(fetchWhich, whichId)),
    fetchLike: (likerId, photoId) => dispatch(fetchLike(likerId, photoId))
  }
}

export default connect(mSTP, mDTP)(LikeIcon)
