import { connect } from "react-redux";
import CommentForm from "./comment_form";
import { createComment, removeCommentErrors } from "../../actions/comment_actions";

const mSTP = (state, ownProps) => {
  return {
    currentUserId: state.session.currentUserId,
    errors: state.errors.comment
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    removeCommentErrors: () => dispatch(removeCommentErrors()),
    createComment: (comment) => dispatch(createComment(comment))
  }
}

export default connect(mSTP, mDTP)(CommentForm)
