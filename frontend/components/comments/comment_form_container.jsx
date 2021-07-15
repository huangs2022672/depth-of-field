import { connect } from "react-redux";
import CommentForm from "./comment_form";
import { createComment } from "../../actions/comment_actions";
import { removeErrors } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
  // debugger
  return {
    currentUserId: state.session.currentUserId,
    errors: state.errors.comment
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    removeErrors: () => dispatch(removeErrors()),
    createComment: (comment) => dispatch(createComment(comment))
  }
}

export default connect(mSTP, mDTP)(CommentForm)
