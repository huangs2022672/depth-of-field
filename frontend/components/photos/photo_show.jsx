import React from 'react';

class PhotoShow extends React.Component {
  componentDidMount() {
    // debugger
    this.props.fetchPhoto(this.props.match.params.photoId)
  }

  render() {
    const { photo } = this.props
    return (
      <div className="photo-show">
        <img src={photo.img_url} alt={photo.title} />
      </div>
    )
  }
}

export default PhotoShow;
