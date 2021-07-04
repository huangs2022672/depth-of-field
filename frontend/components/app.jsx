import React from 'react';
import { 
  Route,
  Switch
} from 'react-router-dom'

import GlobalNavContainer from './global_nav/global_nav_container'
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

const App = () => (
  <div>
    {/* <h1 className="live-msg">Depth of Field is LIVE!!</h1>
    <img className="live-img" src={window.liveURL} alt="depth of field is LIVE!!!"/> */}
    <Switch>
      <Route exact path="/signup" component={SignupFormContainer}/>
      <Route exact path="/login" component={LoginFormContainer}/>
      <Route path="/" component={GlobalNavContainer}/>
    </Switch>
  </div>
)

export default App;
