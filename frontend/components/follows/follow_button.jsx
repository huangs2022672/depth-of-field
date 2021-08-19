import React from 'react';

class FollowButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      follower_id: props.currentUserId,
      followee_id: props.user.id,
      currentFollows: props.currentFollows,
      isFollowing: ""
    }

    this.handleFollow = this.handleFollow.bind(this)
  }

  componentDidMount() {
    const { fetchFollow, currentFollows, currentUserId } = this.props
    const { follower_id, followee_id } = this.state

    if (currentUserId) {
      fetchFollow(follower_id, followee_id)
        .then(() => {
          this.setState({ isFollowing: currentFollows[followee_id]})
        })
    }
  }

  handleFollow() {
    const { createFollow, deleteFollow, currentFollows } = this.props
    const { isFollowing, follower_id, followee_id } = this.state

    if (isFollowing) {
      deleteFollow(currentFollows[followee_id])
        .then(() => {
          this.setState({ isFollowing: currentFollows[followee_id]})
        })
    } else {
      createFollow({
        follower_id: follower_id,
        followee_id: followee_id
      })
        .then(() => {
          this.setState({ isFollowing: currentFollows[followee_id]})
        })
    }
  }

  render() {
    const { isFollowing } = this.state

    let followButton;

    if (isFollowing === "") {
      followButton = null
    } else if (isFollowing) {
      followButton =
        <button
          onClick={this.handleFollow}
          className="following">
          <div>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span> Following</span>
          </div>
        </button>
    } else {
      followButton =
        <button
          onClick={this.handleFollow}
          className="follow">
          <div>
            <i className="fa fa-plus" aria-hidden="true"></i>
            <span> Follow</span>
          </div>
        </button>
    }

    return (
      <div className="follow-button">
        {followButton}
      </div>
    )
  }
}

export default FollowButton;
