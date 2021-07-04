class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params[:email], user_params[:password])
    if @user
      log_in!(@user)
      render "api/users/user"
    else
      render json: ["Email or password is invalid"], status: 401
      # render json: {error: ["Email or password is invalid"]}
      # renders a json with key of error: ["array of strings of error messages"]
    end
  end

  def destroy
      log_out!
      render "api/users/user"
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end

end