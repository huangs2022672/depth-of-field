import React from 'react';
import { Link } from 'react-router-dom'

class PhotoShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.photo
    // debugger
  }

  componentDidMount() {
    // this.props.fetchPhoto(this.props.match.params.photoId)

    // not sure how to update views for a photo atm
    // updates views for photo on each did-mount
    // if (this.state) {
    //   this.setState({ views: this.state.views + 1 })
    //   this.props.editPhoto(this.state)
    //   console.log(this.state.views)
    // }
  }

  render() {
    const { photo, fetchPhoto, match, user } = this.props
    !photo ? fetchPhoto(match.params.photoId) : null;
    // !user ? fetchPhoto(match.params.photoId) : null;
    return (
      <div className="photo-show-page">
        <div className="photo-show">
          {photo ? (
            <img src={photo.img_url} alt={photo.title} />
          ) : null}
          {/* <div>image slider</div>
          <div>left right nav</div>
          <div>zoom</div> */}
        </div>
        <div className="photo-show-details">
          <div className="photo-show-details-left">
            {
              user ? (
                <div className="photo-details">
                  <div className="user-avatar">
                    <Link to={`/users/${user.id}`}>
                      <img src="https://combo.staticflickr.com/pw/images/buddyicon10_m.png" alt="user avatar" />
                    </Link>
                  </div>
                  <div className="photo-info-form">
                    <Link to={`/users/${user.id}`}>
                      <p>{user.first_name} {user.last_name}</p>
                    </Link>
                    <div>
                      {/* buttom: displays title and desc of photo */}
                      {/* click to edit */}
                      {/* hover: gray with icon */}
                    </div>
                  </div>
                </div>
              ) : null
            }
            <div className="photo-comments">
              <div className="comment-index">
                {/* list of comments */}
              </div>
              <div className="comment-form">
                {/* a form to create comments */}
              </div>
            </div>
          </div>
          <div className="photo-show-details-right">
            <div className="details-right-top">
              {/* views, faves, comment count, taken on */}
            </div>
            <div className="details-right-bot">
              {/* tags, privacy */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PhotoShow;
