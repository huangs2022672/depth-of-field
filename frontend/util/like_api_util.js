export const fetchLikes = (fetchBy, byId) => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/likes`,
      data: {
        like: {
          fetch_by: fetchBy,
          by_id: byId
        }
      }
    })
  )
}

export const fetchLike = (likerId, photoId) => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/likes/${likerId}`,
      data: {
        like: {
          liker_id: likerId,
          photo_id: photoId
        }
      }
    })
  )
}

export const createLike = like => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/photos/${like.photo_id}/likes`,
      data: { like }
    })
  )
}

export const deleteLike = likeId => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/likes/${likeId}`
    })
  )
}
