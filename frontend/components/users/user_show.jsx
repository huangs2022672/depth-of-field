import React from 'react'
import { Link } from 'react-router-dom'
import ExploreIndexItem from '../photos/explore_index_item'

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
    const photo = {
        uploader_id: this.props.match.params.userId
    }
    this.props.fetchPhotos()
  }

  render() {
    const { user, photos, isCurrentUser } = this.props
    return (
      <div className="user-show-page">
        <div className="user-show-banner">
          <img src="https://farm66.staticflickr.com/65535/coverphoto/193307570@N02_h.jpg?1625958113" alt="banner image" />
          {
            user ? (
              <div className="user-show-profile">
                <div className="user-profile-left" >
                  <img src="https://combo.staticflickr.com/pw/images/buddyicon10_r.png" alt="profile picture" />
                  <div>
                    <h2>{user.first_name} {user.last_name}</h2>
                    <div className="display-follow">
                      <p>display name</p>
                      {isCurrentUser ? <Link to={`/users/${user.id}/follower`}># Followers</Link> : <p># Followers</p>}
                      <Link to={`/users/${user.id}/following`}># Following</Link>
                    </div>
                  </div>
                </div>

                <div className="user-profile-right">
                  {/* {console.log(photos)} */}
                  {photos ? <p> # Photos</p> : null}
                  <p>Joined {user.created_at.slice(0,4)}</p>
                </div>
              </div>
            ) : <p>user issue 1</p>
          }
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
            {
              photos ? (
                photos.map(photo => (
                  <ExploreIndexItem key={photo.id} photo={photo}/>
                ))
              ) : <p>photo issue 2</p>
            }
          </div>
        </div>

      </div>
    )
  }
}

export default UserShow;