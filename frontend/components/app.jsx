import React from 'react';

const App = () => (
  <div>
    <h1 className="live-msg">Depth of Field is LIVE!!</h1>
    <img className="live-img" src={window.liveURL} alt="depth of field is LIVE!!!"/>
  </div>
)

export default App;
