import React from 'react';

const PhotoUploadInput = (props) => {
  const { handleFile } = props
  return (
    <>
      <label
      htmlFor="photo-upload-input"
      className="photo-upload-label"
      ></label>
      <input
      id="photo-upload-input"
      type="file"
      className="photo-upload-input"
      onChange={handleFile}
      accept="image/*"
      />
    </>
  )
}

export default PhotoUploadInput;
