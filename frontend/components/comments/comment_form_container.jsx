import { connect } from "react-redux";
import CommentForm from "./comment_form";
import { createComment } from "../../actions/comment_actions";

const mSTP = (state, ownProps) => {

  return {
    currentUser: state.entities.users[state.session.currentUserId]
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    createComment: (comment) => dispatch(createComment(comment))
  }
}

export default connect(mSTP, mDTP)(CommentForm)
