class Api::LikesController < ApplicationController
  def show
    # debugger

    @like = Like.where(
      liker_id: like_params[:liker_id],
      photo_id: like_params[:photo_id]
    )[0]



    render :show
  end

  def index

    if like_params[:fetch_by] == "Photo"
      @likes = Like.where(photo_id: like_params[:photo_id])
    elsif like_params[:fetch_by] == "Liker"
      @likes = Like.where(liker_id: like_params[:liker_id])
    end

    render :index
    # @likes = Like.includes(:liker, :photo).all
  end

  def create
    @like = Like.new(like_params)
    # debugger

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
    params.require(:like).permit(:liker_id, :photo_id, :fetch_by, :by_id)
  end
end
