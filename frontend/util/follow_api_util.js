export const fetchFollows = (fetchBy, byId) => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/follows`,
      data: {
        follow: {
          fetch_by: fetchBy,
          user_id: byId
        }
      }
    })
  )
}

export const fetchFollow = (followerId, followeeId) => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/follows/${followerId}`,
      data: {
        follow: {
          follower_id: followerId,
          followee_id: followeeId
        }
      }
    })
  )
}

export const createFollow = follow => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/users/${follow.follower_id}/follows`,
      data: { follow }
    })
  )
}

export const deleteFollow = followId => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/follows/${followId}`
    })
  )
}
