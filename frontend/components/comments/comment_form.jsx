import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: "",
      commenter_id: props.currentUserId,
      photo_id: props.photo.id
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleComment = this.handleComment.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createComment(this.state)
    this.setState({body: ""})
    // setTimeout(() => this.props.removeCommentErrors(), 2000)
  }

  handleComment(e) {
    this.setState({body: e.currentTarget.value})
  }

  render() {
    const { errors } = this.props
    return (
      <div className="comment-form">

        <div className="comment-form-avatar">
          <img src="https://combo.staticflickr.com/pw/images/buddyicon02.png" alt="comment-user-avatar" />
        </div>

        <form className="comment-form-right"
          onSubmit={this.handleSubmit}>
          <div className="comment-form-input">

            <label htmlFor="comment"></label>

            <textarea
            id={errors[0] ? "create-comment-errors" : "comment-textarea"}
            value={this.state.body}
            onChange={this.handleComment}
            placeholder="Add a comment"
            >
            </textarea>
            <div className="comment-form-button">
              <button>Comment</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentForm
