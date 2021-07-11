import { connect } from "react-redux";
import UserShow from "./user_show";
import { fetchUser } from "../../actions/user_actions";
import { fetchPhotos } from "../../actions/photo_actions";

const mSTP = (state, { match } ) => {
  const {params} = match;
  let count = 0;
  debugger
  return {
    user: state.entities.users[params.userId],
    photos: Object.values(state.entities.photos).filter(photo => {
      return photo.uploader_id == params.userId
    }),
    isCurrentUser: state.session.currentUserId === params.userId,
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchPhotos: () => dispatch(fetchPhotos())
  }
}

export default connect(mSTP, mDTP)(UserShow)
