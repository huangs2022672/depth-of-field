import React from 'react';
import { Link } from 'react-router-dom'
import CommentIndexContainer from '../comments/comment_index_container'
import CommentFormContainer from '../comments/comment_form_container'

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
                    <div className="photo-info-top">
                      <div className="user-name">
                        <Link to={`/users/${user.id}`}>
                          <p>{user.first_name} {user.last_name}</p>
                        </Link>
                      </div>
                      <div className="follow-button">
                        <button className="follow-button">Follow</button>
                      </div>
                    </div>
                    <div className="photo-info-bot">
                      <h2>{photo.title}</h2>
                      <h3><p>{photo.description}</p></h3>
                    </div>
                  </div>
                </div>
              ) : null
            }
            <div className="photo-comments">
              { photo ? <CommentIndexContainer photo={photo}/> : null }
              { photo ? <CommentFormContainer photo={photo}/> : null }
            </div>
          </div>
          <div className="photo-show-details-right">
            <div className="details-right-top">
              <div className="views-faves-comments-date">
                <div className="views-faves-comments">
                  <div className="views">
                    <h4>1</h4>
                    <p>view</p>
                  </div>
                  <div className="faves">
                    <h4>0</h4>
                    <p>faves</p>
                  </div>
                  <div className="comments">
                    <h4>1</h4>
                    <p>comment</p>
                  </div>
                </div>
                <div className="date-taken">
                  Taken on May 24, 2019
                </div>
              </div>
              <div className="tags-people">
                <div className="tags-link">
                  <Link to="/photos/tags">
                    Tags
                  </Link>
                </div>
                <div className="tags-index">
                  <div><p>tag1</p></div>
                  <div><p>tag2</p></div>
                  <div><p>tag3</p></div>
                </div>
              </div>
            </div>
            <div className="details-right-bot">
              <div className="additional-info">
                <h3>Additional info</h3>
                <div>
                  <h4><span className="iconify" data-icon="cil:lock-unlocked" data-inline="false"></span> Viewing privacy</h4>
                  <p>{ photo ? ( photo.private === true ? "Private" : "Public" ) : null }</p>
                </div>
              </div>
              {/* tags, privacy */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PhotoShow;
