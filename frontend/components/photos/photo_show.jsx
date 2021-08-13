import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import CommentIndexContainer from '../comments/comment_index_container';
import CommentFormContainer from '../comments/comment_form_container';
import FollowButtonContainer from '../follows/follow_button_container';
import LikeIconContainer from '../likes/like_icon_container'

class PhotoShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      private: "",
      views: "",
      uploader_id: "",
      editingTitle: false,
      editingPrivacy: false,
      deleting: false,
      following: false
    }

    this.handleTitle = this.handleTitle.bind(this)
    this.handleDescription = this.handleDescription.bind(this)
    this.handlePrivacy = this.handlePrivacy.bind(this)
    this.handleSubmitTitle = this.handleSubmitTitle.bind(this)
    this.handleSubmitPrivacy = this.handleSubmitPrivacy.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleFollow = this.handleFollow.bind(this)
  }

  componentDidMount() {
    // this.setState({
    //   title: photo.title,
    //   description: photo.description,
    //   private: photo.private,
    //   views: photo.views
    // })
    window.scrollTo(0, 0);
    if (!this.props.photo) {
      this.props.fetchPhoto(this.props.match.params.photoId)
    }

    // not sure how to update views for a photo atm
    // updates views for photo on each did-mount
    // if (this.state) {
    //   this.setState({ views: this.state.views + 1 })
    //   this.props.editPhoto(this.state)
    //   console.log(this.state.views)
    // }
  }

  componentDidUpdate() {
    if (this.state.deleting) {
      document.querySelector("html").style.overflowY = "hidden"
    } else {
      document.querySelector("html").style.overflowY = "auto"
    }
  }

  handleDelete(e) {
    const { deletePhoto, photo, user } = this.props
    deletePhoto(photo.id)
      .then(() => {
        this.props.history.push(`/users/${user.id}`)
      })
    this.setState({deleting: false})
  }

  handleSubmitTitle(e) {
    e.preventDefault()

    if (this.state.title)
      this.props.editPhoto(this.state);

    this.setState({editingTitle: false})
  }

  handleTitle(e) {
    this.setState({title: e.currentTarget.value})
  }

  handleDescription(e) {
    this.setState({description: e.currentTarget.value})
  }

  handleSubmitPrivacy(e) {
    e.preventDefault()
    this.props.editPhoto(this.state)
    this.setState({editingPrivacy: false})
  }

  handlePrivacy(e) {
    this.setState({private: e.currentTarget.value})
  }

  handleClick(e) {
    e.currentTarget.select()
  }


  handleFollow(e) {
    this.setState({following: !this.state.following})
  }


  render() {
    const {
      photo,
      user,
      match,
      comments,
      currentUserId,
      fetchPhoto,
      deletePhoto,
      editPhoto
    } = this.props

    // !this.state.uploader_id && photo ? (
    //   this.setState({...photo})
    // ): null

    !photo ? fetchPhoto(match.params.photoId) : null;
      // .then(payload=>(()=>this.setState({...payload.photo})))
    // !user ? fetchPhoto(match.params.photoId) : null;
    return (
      <div className="photo-show-page">

        {this.state.deleting ? (
          <div className="photo-delete-modal">
            <div className="photo-delete-main">
              <div onClick={() => this.setState({deleting: false})}
              className="close-x">
                <span className="iconify" data-icon="bi:x-lg"></span>
              </div>
              <div className="delete-title">
                <h2>Delete Photo</h2>
              </div>
              <div className="delete-message">
                <p>Do you want to permanently delete this photo?</p>
              </div>
              <div className="delete-buttons">
                <button onClick={() => this.setState({deleting: false})}
                className="cancel-button">Cancel</button>
                <button onClick={this.handleDelete}
                className="delete-button">Delete</button>
              </div>
            </div>
          </div>
        ) : null}

        <div className="photo-show">
          {photo ? (
            <img src={photo.img_url} alt={photo.title} />
          ) : null}
          {/* <div>image slider</div>
          <div>left right nav</div>
          <div>zoom</div> */}

          <div className="photo-delete">
            {currentUserId && photo && currentUserId === photo.uploader_id ? (
              <button
                onClick={() => this.setState({deleting: true})}
                className="photo-delete"><span className="iconify" data-icon="mdi:trash-can-outline" data-inline="false"></span>
              </button>
            ): (
              <LikeIconContainer />
            )}
          </div>

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

                      { user && currentUserId !== user.id ? <FollowButtonContainer user={user}/> : null }

                      {/* <div className="follow-button">
                        <button
                        onClick={this.handleFollow}
                        className={this.state.following ? "follow-button following" :  "follow-button follow" }>
                          {this.state.following ? (
                          <div><i className="fa fa-check" aria-hidden="true"></i><span> Following</span></div>
                          ) : (
                          <div><i className="fa fa-plus" aria-hidden="true"></i><span> Follow</span></div>
                          )}</button>
                      </div> */}



                    </div>

                    { !this.state.editingTitle ? (
                      <div className="photo-info-bot">

                        <div
                        onClick={() => {
                          if (currentUserId && currentUserId === user.id) {
                            this.setState({...photo, editingTitle: true})
                          }
                        }}
                        className={photo.uploader_id === currentUserId ? (
                          "title-description has-hover-effect"
                        ) : ( "title-description" )}>
                          <h2>{photo.title}</h2>
                          <h3><p className={photo.description.trim() === "" ? "description-gray" : null }>{photo.description.trim() !== "" ? photo.description : "Add description"}</p></h3>
                          { photo.uploader_id === currentUserId ? (
                            <div className="photo-title-edit">
                              <button
                              onClick={() => this.setState({...photo, editingTitle: true})}
                              className="title-edit"><span className="iconify" data-icon="bx:bxs-edit" data-inline="false"></span></button>
                            </div>
                          ) : null}
                        </div>

                      </div>
                    ) : (
                      <div className="photo-info-bot-edit">
                        <div className="title-desc-editing">
                          <form onSubmit={this.handleSubmitTitle}>
                            <label htmlFor="title"></label>
                            <input type="text" id="title"
                              value={this.state.title}
                              onChange={this.handleTitle}
                              onClick={this.handleClick}
                              placeholder="Add title"
                            />
                            <label htmlFor="description"></label>
                            <textarea
                              id="description"
                              value={this.state.description}
                              onChange={this.handleDescription}
                              placeholder="Add description"
                              >
                            </textarea>
                            <div className="title-edit-button">
                              <button>Done</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}

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
                    <h4>{photo ? comments.filter(comment => comment.photo_id === photo.id).length : null}</h4>
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

export default withRouter(PhotoShow);
