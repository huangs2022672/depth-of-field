import React from 'react'
import { Link } from 'react-router-dom'

const SessionNav = ({currentUser, logout}) => (
  <>
    {currentUser ? (
      <nav className="welcome-logout">
      <p>Hi {currentUser.firstName}!</p>
      <button onClick={() => logout()}></button>
      </nav>
    ) : (
      <nav className="login-signup">
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
      </nav>
    )}
  </>
)

export default SessionNav;