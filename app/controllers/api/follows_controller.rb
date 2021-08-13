class Api::FollowsController < ApplicationController
  def show
    @follow = Follow.where(
      follower_id: follow_params[:follower_id],
      followee_id: follow_params[:followee_id]
    )[0]

    render :show
    # if @follow
    #   render :show
    # else
    #   render json: ["Follow not found"], status: 404
    # end
  end

  def index
    @follows = Follow.includes(:follower, :followee).all
    render :index
  end

  def create
    @follow = Follow.new(follow_params)
    # debugger #4 createFollow
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 401
    end
  end

  def destroy
    @follow = current_user.followers.find_by(id: params[:id])
    # debugger #4 deleteFollow
    if @follow && @follow.destroy
      render :show
    else
      render json: @follow.errors.full_messages, status: 401
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id, :fetch_who)
  end
end
