import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const SessionNav = ({user, logout, history}) => {
  return (
    <>
      {user ? (
        <nav className="welcome-logout">
        <span>Hi {user.first_name.slice(0,1).toUpperCase()+user.first_name.slice(1).toLowerCase()}!</span>
        <button onClick={() =>{
          logout()
          history.push("/")
        }}>Log Out</button>
        </nav>
      ) : (
        <nav className="login-signup">
        <button className="login"><Link to="/login">Log In</Link></button>
        <button className="signup"><Link to="/signup">Sign Up</Link></button>
        </nav>
      )}
    </>
  )
}

export default withRouter(SessionNav);
