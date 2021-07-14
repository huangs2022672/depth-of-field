export const fetchPhotoComments = photoId => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/comments`,
      data: {
        comment: {
          photo_id: photoId
        }
      }
    })
  )
}

export const fetchComment = commentId => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/comments/${commentId}`
    })
  )
}

export const createComment = comment => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/users/${comment.commenterId}/comments`,
      data: { comment }
    })
  )
}

export const editComment = comment => {
  return (
    $.ajax({
      method: "PATCH",
      url: `/api/comments/${comment.id}`,
      data: { comment }
    })
  )
}

export const deleteComment = (commentId) => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/comments/${commentId}`
    })
  )
}
