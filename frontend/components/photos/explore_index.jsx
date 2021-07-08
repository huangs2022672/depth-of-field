import React from 'react'
import ExploreIndexItem from './explore_index_item'

class ExploreIndex extends React.Component {
  componentDidMount() {
    // debugger
    this.props.fetchPhotos()
  }

  render() {
    const { photos } = this.props
    // debugger
    // code to shuffle images
    for(let i = photos.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = photos[i]
      photos[i] = photos[j]
      photos[j] = temp
    }

    return (
      <div className="explore-index">
        {
            photos.map(photo => (
              <ExploreIndexItem key={photo.id} photo={photo}/>
            ))
        }
      </div>
    )
  }
}

export default ExploreIndex;
