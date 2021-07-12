import React from 'react';
import { Link } from 'react-router-dom'

const ExploreIndexItem = (props) => {
  const { photo } = props
  return (
    <div className="explore-index-item">
      <Link to={`/photos/${photo.id}`}>
        <img src={photo.img_url} alt={photo.title} />
        <div className="photo-hover-details">
          <p className="photo-title">
            {photo.title}
          </p>
          <p className="photo-likes">
            {photo.views} views
          </p>
        </div>
      </Link>
    </div>
  )
}

export default ExploreIndexItem
