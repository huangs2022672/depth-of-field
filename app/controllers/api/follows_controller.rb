class Api::FollowsController < ApplicationController
  def show
    @follow = Follow.find(params[:id])
    render :show
  end

  def index
    @follows = Follow.includes(:follower, :followee).all
    render :index
  end

  def create
    @follow = Follow.new(follow_params)

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 401
    end
  end

  def destroy
    @follow = current_user.followee.find_by(id: params[:id])
    if @follow && @follow.destroy
      render :show
    else
      render json: @follow.errors.full_messages, status: 401
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
