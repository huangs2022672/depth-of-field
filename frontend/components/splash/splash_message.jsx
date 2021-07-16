import React from 'react'
import { Link } from 'react-router-dom'

const SplashMessage = () => (
  <div className="splash-message">
    <main className="splash-message">
      <div>
        <h1 className="splash-message">Find your inspiration.</h1>
      </div>
      <div>
        <h2 className="splash-message">Join the DOF community, home to tens of billions of photos and 2 million groups.</h2>
      </div>
      <div>
        <Link to="/signup" className="splash-message">Start for free</Link>
      </div>
    </main>
  </div>
)

export default SplashMessage;
