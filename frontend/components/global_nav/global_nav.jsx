import React from 'react';
import Logo from './logo';
import SearchBar from './search_bar';
import SessionNav from './session_nav';
import { Link } from 'react-router-dom'

class GlobalNav extends React.Component {
  render() {
    const { currentUser, logout } = this.props
    return (
      <header className={`global-nav ${currentUser ? ("global-nav-not-root") : null}`}>
        <Logo/>
        {
          currentUser ? (
            <Link to="/explore" className="top-nav-explore">Explore</Link>
          ) : null
        }
        <SearchBar/>
        {
          currentUser ? (
            <Link to="/photos/upload">
              <span className="iconify cloud-upload-icon" data-icon="ic:baseline-cloud-upload" data-inline="false"></span>
            </Link>
          ) : null
        }
        <SessionNav user={currentUser} logout={logout}/>
      </header>
    )
  }
}

export default GlobalNav;
