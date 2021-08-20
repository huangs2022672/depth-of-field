import React from 'react'
import { Link } from 'react-router-dom'

const Logo = (props) => (
    <Link to={props.currentUser ? "/explore" : "/"}
      id="global-nav-logo">
      <h2>Depth of <span className="iconify" data-icon="gridicons-shutter" data-inline="false"></span>Field</h2>
    </Link>
)

export default Logo;
