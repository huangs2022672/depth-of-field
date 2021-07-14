import React from 'react';
import { Link } from 'react-router-dom'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: "",
      commenter_id: props.currentUser.id,
      photo_id: props.photo.id
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleComment = this.handleComment.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault()
    this.props.createComment(this.state)
  }

  handleComment(e) {
    this.setState({body: e.currentTarget.value})
  }

  render() {
    const { currentUser, photo, createComment } = this.props

    return (
      <div className="comment-form">

        <div className="comment-form-avatar">
          <img src="https://combo.staticflickr.com/pw/images/buddyicon02.png" alt="comment-user-avatar" />
        </div>

        <form className="comment-form-right"
          onSubmit={this.handleSubmit}>
          <div className="comment-form-input">

            <label htmlFor="comment">Add a comment</label>

            <textarea
            id="comment"
            value={this.state.body}
            onChange={this.handleComment}
            ></textarea>

          </div>
          <div className="comment-form-button">
            <button>Comment</button>
          </div>
        </form>

      </div>
    )
  }
}

export default CommentForm
