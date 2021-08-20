import React from 'react';

class LikeIcon extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      liker_id: this.props.likerId,
      photo_id: this.props.photoId,
      currentLikes: this.props.currentLikes,
      isLiked: "",
    }


    this.handleLike = this.handleLike.bind(this)
  }

  componentDidMount() {
    const { fetchLike, currentLikes, likerId } = this.props
    const { liker_id, photo_id } = this.state
    debugger
    if (likerId) {
      fetchLike(liker_id, photo_id)
        .then(() => {
          this.setState({ isLiked: currentLikes[photo_id]})
        })
    }
  }

  handleLike() {
    const { createLike, deleteLike, currentLikes } = this.props
    const { isLiked, liker_id, photo_id } = this.state

    if (isLiked) {
      deleteLike(currentLikes[photo_id])
        .then(() => {
          this.setState({ isLiked: currentLikes[photo_id]})
        })
    } else {
      createLike(this.state)
        .then(() => {
          this.setState({ isLiked: currentLikes[photo_id]})
        })
    }
  }

  render() {
    const { isLiked, photo_id } = this.state
    const { likes } = this.props

    let numLikes;
    if (likes){
      numLikes = likes.filter(like => like.photo_id === photo_id).length
    }

    let likeIcon;

    if (isLiked === "") {
      likeIcon = null
    } else if (isLiked) {
      likeIcon =
        <button
          onClick={this.handleLike}
          className="liked">
          <div>
            <i className="fa fa-star" aria-hidden="true"></i>
            <p>{numLikes}</p>
          </div>
        </button>
    } else {
      likeIcon =
        <button
          onClick={this.handleLike}
          className="not-liked">
          <div>
            <i className="fa fa-star-o" aria-hidden="true"></i>
            <p>{numLikes}</p>
          </div>
        </button>
    }

    return (
      <>
        {likeIcon}
      </>
    )
  }
}

export default LikeIcon;
