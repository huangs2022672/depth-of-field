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
import ExploreIndexContainer from './photos/explore_index_container';
import PhotoShowContainer from './photos/photo_show_container'

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={SignupFormContainer}/>
      <Route path="/" render={ () => (
        <div>
          <GlobalNavContainer/>
          <Footer/>
        </div>
      )}/>
    </Switch>

    <AuthRoute exact path="/" component={SplashMessage}/>
    <AuthRoute exact path="/" component={SplashBG}/>

    <Route path="/explore" component={ExploreIndexContainer}/>
    <Route exact path="/photos/:photoId" component={PhotoShowContainer}/>

  </div>
)

export default App;

{/* <AuthRoute exact path="/" components={{bg: SplashBG, message: SplashMessage}}/>
<AuthRoute exact path="/" render={ () => (
  <div>
    <SplashMessage/>
    <SplashBG/>
  </div>
)}/>
<Route path="/" component={Footer}/>
<Route path="/" component={GlobalNavContainer}/> */}
