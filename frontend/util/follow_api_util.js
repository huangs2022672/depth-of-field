export const fetchFollows = fetchWho => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/follows`,
      data: {
        follow: {
          fetch_who: fetchWho
        }
      }
    })
  )
}

export const fetchFollow = followId => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/follows/${followId}`
    })
  )
}

export const createFollow = follow => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/users/${follow.followerId}/follows`,
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
