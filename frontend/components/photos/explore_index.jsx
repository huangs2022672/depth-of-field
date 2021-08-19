import React from 'react'
import ExploreIndexItem from './explore_index_item'

class ExploreIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos()
  }

  render() {
    const { photos, currentUserId, likes, users } = this.props

    return (
      <div className="explore-index">
        { photos.map(photo => (
            <ExploreIndexItem
            key={photo.id}
            photo={photo}
            likes={likes}
            currentUserId={currentUserId}
            users={users}
            />
          ))}
      </div>
    )
  }
}

export default ExploreIndex;
