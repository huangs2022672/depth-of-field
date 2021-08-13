export const fetchFollows = (fetchWho, userId) => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/follows`,
      data: {
        follow: {
          fetch_who: fetchWho,
          user_id: userId
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
  debugger //3 createFollow
  return (
    $.ajax({
      method: "POST",
      url: `/api/users/${follow.follower_id}/follows`,
      data: { follow }
    })
  )
}

export const deleteFollow = followId => {
  debugger //3 deleteFollow
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/follows/${followId}`
    })
  )
}
