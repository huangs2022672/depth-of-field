import React from 'react'
import { Link } from 'react-router-dom'

const SessionNav = ({user, logout}) => {
  return (
    <>
      {user ? (
        <nav className="welcome-logout">
        <span>Hi {user.first_name.slice(0,1).toUpperCase()+user.first_name.slice(1).toLowerCase()}!</span>
        <button onClick={() => logout()}>Log Out</button>
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

export default SessionNav;
