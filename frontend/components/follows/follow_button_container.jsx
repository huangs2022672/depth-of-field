import { connect } from "react-redux";
import FollowButton from "./follow_button";
import {
  fetchFollows,
  fetchFollow,
  createFollow,
  deleteFollow
} from '../../actions/follow_actions';

const mSTP = (state, ownProps) => {
  // debugger //8 currentFollows gets updated
  return {
    currentUserId: state.session.currentUserId,
    currentFollows: state.session.currentFollows
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    fetchFollows: fetchWho => dispatch(fetchFollows(fetchWho)),
    fetchFollow: (followerId, followeeId) => dispatch(fetchFollow(followerId, followeeId)),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: followId => dispatch(deleteFollow(followId))
  }
}

export default connect(mSTP, mDTP)(FollowButton)
