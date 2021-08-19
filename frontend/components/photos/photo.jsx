import React from 'react';

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props.photo
    }

    this.state.views = this.state.views + 1
  }
  componentDidMount() {
    const { editPhoto } = this.props
    editPhoto(this.state)
  }

  render() {
    const { photo } = this.props
    return (
      <img src={photo.img_url} alt={photo.title} />
    )
  }
}

export default Photo
