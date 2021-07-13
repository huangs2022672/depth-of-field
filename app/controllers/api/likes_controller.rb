class Api::LikesController < ApplicationController
  def show
    @like = Like.find(params[:id])
    render :show
  end

  def index
    @likes = Like.includes(:liker, :photo).all
    render :index
  end

  def create
    @like = Like.new(like_params)

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 401
    end
  end

  def destroy
    @like = current_user.likes.find_by(id: params[:id])
    if @like && @like.destroy
      render :show
    else
      render json: @like.errors.full_messages, status: 401
    end
  end

  private
  def like_params
    params.require(:like).permit(:liker_id, :photo_id)
  end
end
