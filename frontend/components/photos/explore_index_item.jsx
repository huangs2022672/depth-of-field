import React from 'react';
import { Link } from 'react-router-dom'

const ExploreIndexItem = (props) => {
  const { photo } = props
  return (
    <div className="explore-index-item">
      <Link to={`/photos/${photo.id}`}>
        <div className="photo-hover-details">
          <div className="photo-title">
            {photo.title}
          </div>
          <div className="photo-likes">
            {photo.views} views
          </div>
        </div>
        <img src={photo.img_url} alt={photo.title} />
      </Link>
    </div>
  )
}

export default ExploreIndexItem
