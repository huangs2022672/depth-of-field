export const fetchLikes = likerId => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/likes`,
      data: {
        like: {
          liker_id: likerId
        }
      }
    })
  )
}

export const fetchLike = likeId => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/likes/${likeId}`
    })
  )
}

export const createLike = like => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/users/${like.likerId}/likes`,
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
