import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import GlobalNav from "./global_nav";

const mSTP = ({entities, session}, ownProps) => {
  return {
    currentUser: entities.users[session.currentUserId]
  }
}

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mSTP, mDTP)(GlobalNav)