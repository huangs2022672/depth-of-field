import { connect } from "react-redux";
import CommentIndex from "./comment_index";
import {
  fetchPhotoComments,
  createComment,
  editComment,
  deleteComment
} from "../../actions/comment_actions";

const mSTP = (state, ownProps) => {
  const comments = Object.values(state.entities.comments)
  const users = Object.values(state.entities.users)
  return {
    comments: comments,
    users: users
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    fetchPhotoComments: (photoId) => dispatch(fetchPhotoComments(photoId)),
    createComment: (comment) => dispatch(createComment(comment)),
    editComment: (comment) => dispatch(editComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  }
}

export default connect(mSTP, mDTP)(CommentIndex)
