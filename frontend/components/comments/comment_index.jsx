import React from 'react'
import CommentIndexItem from './comment_index_item'

class CommentIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotoComments(this.props.photo.id)
  }

  render() {
    const {
      comments,
      users,
      photo,
      editComment,
      deleteComment,
      currentUserId,
      removeCommentErrors
    } = this.props

    const photoComments = comments.filter(comment => comment.photo_id === photo.id)

    return (
      <div className="comment-index">
        {
          photoComments.map(comment => {
            const user = users[comment.commenter_id]

            return (
              <CommentIndexItem
              key={comment.id}
              comment={comment}
              user={user}
              photo={photo}
              editComment={editComment}
              deleteComment={deleteComment}
              currentUserId={currentUserId}
              removeCommentErrors={removeCommentErrors}
            />
            )
          })
        }
      </div>
    )
  }
}

export default CommentIndex;
