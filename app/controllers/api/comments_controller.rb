class Api::CommentsController < ApplicationController

  def show
    @comment = Comment.includes(:commenter).find(params[:id])
    render :show
  end

  def index
    @comments = Comment.includes(:commenter).find_by_photo_id(params[:photo_id])
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  def update
    @comment = current_user.comments.find_by(id: params[:id])
    if @comment && @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  def destroy
    @comment = current_user.comments.find_by(id: params[:id])
    if @comment && @comment.destroy
      render :show
    else
      # render json: @comment.errors.full_messages, status: 401
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :commenter_id, :photo_id)
  end
end
