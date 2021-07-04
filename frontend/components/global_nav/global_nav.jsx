import React from 'react';
import Logo from './logo';
import SearchBar from './search_bar';
import SessionNav from './session_nav';

class GlobalNav extends React.Component {
  render() {
    const { currentUser, logout } = this.props
    return (
      <header className="global-nav">
        <Logo/>
        <SearchBar/>
        <SessionNav currentUser={currentUser} logout={logout}/>
      </header>
    )
  }
}

export default GlobalNav;