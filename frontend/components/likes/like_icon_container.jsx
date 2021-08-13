import { connect } from "react-redux";
import LikeIcon from "./like_icon";
import {
  createLike,
  deleteLike
} from '../../actions/like_actions';

const mSTP = (state, ownProps) => {
  // debugger //8 currentLikes gets updated
  return {
    currentUserId: state.session.currentUserId,
    currentLikes: state.session.currentLikes
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    createLike: like => dispatch(createLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId))
  }
}

export default connect(mSTP, mDTP)(LikeIcon)
