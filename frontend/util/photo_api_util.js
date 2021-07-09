export const fetchPhotos = () => {
  // debugger
  return (
    $.ajax({
      method: "GET",
      url: `/api/photos`
    })
  )
}

export const fetchPhoto = (photoId) => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/photos/${photoId}`
    })
  )
}

export const uploadPhoto = (photo) => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/users/${photo.uploaderId}/photos`,
      data: photo,
      contentType: false,
      processData: false
    })
  )
}

export const editPhoto = (photo) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `/api/photos/${photo.id}`,
      data: { photo }
    })
  )
}

export const deletePhoto = (photoId) => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/photos/${photoId}`
    })
  )
}
