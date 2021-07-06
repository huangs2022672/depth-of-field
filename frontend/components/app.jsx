import React from 'react';
import { 
  Route,
  Switch
} from 'react-router-dom'
import { AuthRoute } from '../util/route_util';
import Footer from './footer/footer';

import GlobalNavContainer from './global_nav/global_nav_container'
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import SplashBG from './splash/splash_bg';
import SplashMessage from './splash/splash_message';

const App = () => (
  <div>
    {/* <h1 className="live-msg">Depth of Field is LIVE!!</h1>
    <img className="live-img" src={window.liveURL} alt="depth of field is LIVE!!!"/> */}
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
    </Switch>
      <Route exact path="/" component={GlobalNavContainer}/>
      <Route exact path="/" component={SplashMessage}/>
      <Route exact path="/" component={Footer}/>
      <Route exact path="/" component={SplashBG}/>
  </div>
)

export default App;
