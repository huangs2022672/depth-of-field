export const fetchPhotos = () => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/photos`
    })
  )
}

export const fetchPhoto = photoId => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/photos/${photoId}`
    })
  )
}

export const uploadPhoto = photo => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/users/${photo.get("photo[uploader_id]")}/photos`,
      data: photo,
      contentType: false,
      processData: false
    })
    )
  }
  // data: {
  //   photo: {
  //     title: photo.get("photo[title]"),
  //     description: photo.get("photo[description]"),
  //     private: photo.get("photo[private]"),
  //     file: photo.get("photo[file]"),
  //     uploader_id: photo.get("photo[uploader_id]"),
  //     views: photo.get("photo[views]"),
  //   }
  //  },

export const editPhoto = photo => {
  return (
    $.ajax({
      method: "PATCH",
      url: `/api/photos/${photo.id}`,
      data: { photo }
    })
  )
}

export const deletePhoto = photoId => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/photos/${photoId}`
    })
  )
}
