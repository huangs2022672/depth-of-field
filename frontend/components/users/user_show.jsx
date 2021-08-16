import React from 'react';
import { Link } from 'react-router-dom';
import ExploreIndexItem from '../photos/explore_index_item';
import FollowButtonContainer from '../follows/follow_button_container';

class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      followsFetched: false
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchUser(this.props.match.params.userId)
    this.props.fetchPhotos()
    this.props.fetchFollows("Both", this.props.match.params.userId)
      .then(() => this.setState({followsFetched: !this.state.followsFetched}))
  }

  render() {

    const { user, photos, isCurrentUser, match, fetchUser, fetchPhotos, currentUserId, follows } = this.props

    // an issue is that every time this component is re-rendered, this follows is looped to count followers and following.
    // maybe it is needed, so that followers and following is updated at per re-render
    let followers = 0;
    let following = 0;

    debugger

    for (const key in follows) {
      debugger
      if (follows[key].followee_id == match.params.userId) {
        debugger
        followers ++
      }
      if (follows[key].follower_id == match.params.userId) {
        debugger
        following ++
      }
    }

    !user ? fetchUser(match.params.userId) : null;
    !photos ? fetchPhotos() : null;
    let mostRecent = photos.reverse()

    const { followsFetched } = this.state
    let followsInfo;

    // issue has occured where followsFetched is not updated correctly so follow button and info is not displayed at all.
    if (followsFetched){
      followsInfo =
        <div className="display-follow">
          {/* <p>display name</p> */}
          {/* {isCurrentUser ? <Link to={`/users/${user.id}/follower`}>{followers}  Followers</Link> : <p>{followers}  Followers</p>} */}
          <p>{followers}  Followers</p>
          •
          <p>{following}  Following</p>
          {/* <Link to={`/users/${user.id}/following`}>{following}  Following</Link> */}
        </div>
    }

    return (
      <div className="user-show-page">
        <div className="user-show-banner">
          <img src="https://farm66.staticflickr.com/65535/coverphoto/193307570@N02_h.jpg?1625958113"
          alt="banner image" />
            {user ? (
              <div className="user-show-profile">
                <div className="user-profile-left" >
                  <img src="https://combo.staticflickr.com/pw/images/buddyicon10_r.png" alt="profile picture" />
                  <div className="user-profile-info">
                    <div className="user-profile-name">
                      <h2>{user.first_name} {user.last_name}</h2>
                      { user && currentUserId !== user.id ? <FollowButtonContainer user={user}/> : null }
                    </div>

                    {followsInfo}

                  </div>
                </div>
                <div className="user-profile-right">
                  <p> {photos ? photos.length : null} Photos</p>
                  <p>Joined {user ? user.created_at.slice(0, 4) : null}</p>
                </div>
              </div>
            ) : null }
        </div>

        <div className="user-nav-bar">
          <ul>
            <li>
              <a>Photostream</a>
            </li>
          </ul>
        </div>

        <div className="user-photos-index">
          <div className="user-photos-index-items">
            { mostRecent.map(photo => (
                <ExploreIndexItem key={photo.id} photo={photo} />
              ))}
          </div>
        </div>

      </div>
    )
  }
}

export default UserShow;
