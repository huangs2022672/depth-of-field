class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params[:email], user_params[:password])
    if @user
      log_in!(@user)
      render "api/users/show"
    else
      render json: ["Email or password is invalid"], status: 401
      # render json: {error: ["Email or password is invalid"]}
      # renders a json with key of error: ["array of strings of error messages"]
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out!
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end

end