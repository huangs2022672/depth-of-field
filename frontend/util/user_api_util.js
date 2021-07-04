// users#show for displaying other users' profiles
export const fetchUser = (userId) => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/users/${userId}`
    })
  )
}