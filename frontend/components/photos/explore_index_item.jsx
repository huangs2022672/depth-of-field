import React from 'react';
import { withRouter } from 'react-router-dom';
import LikeIconContainer from '../likes/like_icon_container'

const ExploreIndexItem = (props) => {
  const { photo, currentUserId, likes, users, match } = props
  let numLikes;

  if (likes){
    numLikes = likes.filter(like => like.photo_id === photo.id).length
  }

  let uploaderName;

  if (currentUserId === photo.uploader_id) {
    uploaderName = "by YOU!"
  } else {
    uploaderName = `by ${users[photo.uploader_id].first_name} ${users[photo.uploader_id].last_name}`
  }

  return (
    <div className="explore-index-item">
        <img src={photo.img_url} alt={photo.title} />
        <div className="photo-hover-details">
          <div className="photo-click-link"
          onClick={()=> props.history.push(`/photos/${photo.id}`)}
          ></div>
          <div className="photo-title">
            <div className="title"
            onClick={()=> props.history.push(`/photos/${photo.id}`)}
            >
              {photo.title}
            </div>
            <div className="uploader"
            onClick={() => {
              if (match.params.userId != photo.uploader_id) {
                props.history.push(`/users/${photo.uploader_id}`)
              }
            }}
            >
              {uploaderName}
            </div>
          </div>
          <div className="photo-likes">
            {currentUserId && photo && currentUserId !== photo.uploader_id ? (
              <LikeIconContainer
                likerId={currentUserId}
                photoId={photo.id}
                likes={likes}
                />
            ):(
            <button className="faded">
              <div>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <p>{numLikes}</p>
              </div>
            </button>
            )}
          </div>
        </div>
    </div>
  )
}

export default withRouter(ExploreIndexItem);
