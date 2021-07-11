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
import PhotoUploadContainer from './photos/photo_upload_container'
import UserShowContainer from './users/user_show_container'

const App = () => (
  <div className="app">
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={SignupFormContainer}/>
      <Route path="/" render={ () => (
        <div className="g-nav-footer">
          <GlobalNavContainer/>
          <Footer/>
        </div>
      )}/>
    </Switch>

    <AuthRoute exact path="/" component={SplashMessage}/>
    <AuthRoute exact path="/" component={SplashBG}/>

    <Route path="/explore" component={ExploreIndexContainer}/>
    <Switch>
      <Route exact path="/photos/upload" component={PhotoUploadContainer}/>
      <Route exact path="/photos/:photoId" component={PhotoShowContainer}/>
    </Switch>

    <Route path="/users/:userId" component={UserShowContainer}/>
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
