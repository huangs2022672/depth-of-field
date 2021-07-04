// users#create for sign up
export const signup = (user) => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/users`,
      data: { user }
    })
  )
}
// sessions#create for log in
export const login = (user) => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/session`,
      data: { user }
    })
  )
}
// sessions#destroy for log out
export const logout = () => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/session`
    })
  )
}