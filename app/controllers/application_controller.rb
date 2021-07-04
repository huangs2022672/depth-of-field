class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
    
  end
  
  def log_in!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end
  
  def log_out!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end
  
  def logged_in?
    !!current_user
  end
  
  # def ensure_logged_in
  #   # redirect to "/" if logged out
  # end

  # def ensure_logged_out
  #   # redirect to "/users/:_id" if logged in
  # end
  
end
