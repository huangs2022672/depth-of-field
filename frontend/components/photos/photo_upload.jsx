import React from "react";
import PhotoUploadForm from "./photo_upload_form";

const PhotoUpload = (props) => {
  const { uploadPhoto, currentUserId } = props
  return (
    <div className="photo-upload-container">
      <PhotoUploadForm
      uploadPhoto={uploadPhoto}
      currentUserId={currentUserId}
      />
    </div>
  )
}

export default PhotoUpload;
