class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      render :user
    else
      render json: @user.errors.full_messages, status: 401
      # render json: {error: @user.errors.full_messages}
      # renders a json with key of error: ["array of strings of error messages"]
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :age, :email, :password)
  end

end