import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props.comment,
      editing: false,
    }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleComment = this.handleComment.bind(this)
  }

  handleDelete(e) {
    const { deleteComment, comment } = this.props
    deleteComment(comment.id)
  }

  handleEdit(e) {
    e.preventDefault()
    if (this.state.body) {
      this.props.editComment(this.state)
    } else {
      this.setState({body: this.props.comment.body})
    }
    this.setState({editing: false})
    // setTimeout(() => this.props.removeCommentErrors(), 2000)
  }

  handleComment(e) {
    this.setState({body: e.currentTarget.value})
  }

  render() {
    const { comment, user, currentUserId } = this.props

    return (
      <div className="comment-index-item">
        <div className="comment-user-avatar">
          { user ? (
            <Link to={`/users/${user.id}`}>
              <img src="https://combo.staticflickr.com/pw/images/buddyicon02.png" alt="comment-user-avatar" />
            </Link>
          ) : null }
        </div>
        <div className="comment-index-right">
          <div className="commenter-name">
            { user ? (
              <Link to={`/users/${user.id}`}>
                <h4>{user.first_name} {user.last_name}</h4>
              </Link>
            ) : null }
          </div>

          <div className="comment-cont-dyn">

            { user.id === currentUserId ? (
              <div className="comment-edit-delete">
                <button
                onClick={() => this.setState({editing: true})}
                className="comment-edit"><span className="iconify" data-icon="bx:bxs-edit" data-inline="false"></span></button>
                <button
                onClick={this.handleDelete}
                className="comment-delete"><span className="iconify" data-icon="mdi:trash-can-outline" data-inline="false"></span></button>
              </div>
            ) : null}

            { !this.state.editing ? (
                <div className="comment-not-editing">
                  <div className="comment-display">{comment.body}</div>
                </div>
              ) : (
                <div className="comment-editing">
                  <form onSubmit={this.handleEdit}>
                    <textarea
                    name="body"
                    id="comment"
                    value={this.state.body}
                    onChange={this.handleComment}
                    placeholder="Add a comment"
                    ></textarea>
                    <div className="comment-edit-button">
                      <button>Done</button>
                    </div>
                  </form>
                </div>
              )}

          </div>
        </div>
      </div>
    )
  }
}

export default CommentIndexItem
