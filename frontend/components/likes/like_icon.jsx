import React from 'react';

class LikeIcon extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      isLiked: 1
    }

    this.handleLike = this.handleLike.bind(this)
  }

  componentDidMount() {

  }

  handleLike() {

  }

  render() {
    const { isLiked } = this.state

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
          </div>
        </button>
    } else {
      likeIcon =
        <button
          onClick={this.handleLike}
          className="not-liked">
          <div>
            <i className="fa fa-star-o" aria-hidden="true"></i>
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
