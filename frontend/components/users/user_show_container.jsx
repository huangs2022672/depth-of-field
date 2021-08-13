import { connect } from "react-redux";
import UserShow from "./user_show";
import { fetchUser } from "../../actions/user_actions";
import { fetchPhotos } from "../../actions/photo_actions";
import { fetchFollows } from "../../actions/follow_actions"

const mSTP = (state, { match }) => {
  const { params } = match;
  return {
    user: state.entities.users[params.userId],
    photos: Object.values(state.entities.photos).filter(photo => {
      return photo.uploader_id == params.userId
    }),
    isCurrentUser: state.session.currentUserId === params.userId,
    currentUserId: state.session.currentUserId,
    follows: state.entities.follows,
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchFollows: (fetchWho, userId) => dispatch(fetchFollows(fetchWho, userId))
  }
}

export default connect(mSTP, mDTP)(UserShow)
