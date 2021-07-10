import React from 'react';

const PhotoUploadInput = (props) => {
  const { handleFile } = props
  return (
      <input type="file"
      className="photo-upload-input"
      onChange={handleFile}
      accept="image/*"
      />
  )
}

export default PhotoUploadInput;