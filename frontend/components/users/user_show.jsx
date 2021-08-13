import React from 'react';
import { Link } from 'react-router-dom';
import ExploreIndexItem from '../photos/explore_index_item';
import FollowButtonContainer from '../follows/follow_button_container';

class UserShow extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchUser(this.props.match.params.userId)
    this.props.fetchPhotos()

    this.props.fetchFollows("Both", this.props.match.params.userId)
  }

  render() {

    const { user, photos, isCurrentUser, match, fetchUser, fetchPhotos, currentUserId } = this.props

    !user ? fetchUser(match.params.userId) : null;
    !photos ? fetchPhotos() : null;
    let mostRecent = photos.reverse()

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

                    <div className="display-follow">
                      {/* <p>display name</p> */}
                      {isCurrentUser ? <Link to={`/users/${user.id}/follower`}>Followers</Link> : <p># Followers</p>}
                      <Link to={`/users/${user.id}/following`}>Following</Link>
                    </div>
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
