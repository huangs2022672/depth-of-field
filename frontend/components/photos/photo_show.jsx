import React from 'react';

class PhotoShow extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId)
  }

  render() {
    const { photo } = this.props
    return (
      <div className="photo-show">
        {
          photo ? (
            <img src={photo.img_url} alt={photo.title} />
          ) : <p>photo issue</p>
        }
      </div>
    )
  }
}

export default PhotoShow;
