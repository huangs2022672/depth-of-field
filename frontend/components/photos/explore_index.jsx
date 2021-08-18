import React from 'react'
import ExploreIndexItem from './explore_index_item'

class ExploreIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos()
  }

  render() {
    const { photos, currentUserId, likes } = this.props
    // code to shuffle images
    // for(let i = photos.length - 1; i > 0; i--){
    //   const j = Math.floor(Math.random() * i)
    //   const temp = photos[i]
    //   photos[i] = photos[j]
    //   photos[j] = temp
    // }

    let mostRecent = photos.reverse()

    return (
      <div className="explore-index">
        { mostRecent.map(photo => (
            <ExploreIndexItem
            key={photo.id}
            photo={photo}
            likes={likes}
            currentUserId={currentUserId}/>
          ))}
      </div>
    )
  }
}

export default ExploreIndex;
