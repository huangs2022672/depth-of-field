class Api::PhotosController < ApplicationController

  def show
    @photo = Photo.includes(:uploader, :likes, file_attachment: :blob).find(params[:id])
    # debugger
    render :show
  end

  def index
    # @photos = Photo.includes(:uploader, :likes, file_attachment: :blob).all
    @photos = Photo.includes(:uploader, :likes, file_attachment: :blob).order(created_at: :desc).limit(15)
    # @photos = Photo.includes(:uploader, :likes, file_attachment: :blob).limit(25)
    render :index
  end

  def create
    # debugger # 4 create
    @photo = Photo.new(photo_params)
    # @photo.uploader_id = params[:user_id]
    # @photo.views = rand(1..100)

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 401
    end
  end

  def update
    @photo = current_user.photos.find_by(id: params[:id])
    if @photo && @photo.update(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: 401
    end

  end

  def destroy
    # debugger # 4 delete
    @photo = current_user.photos.find_by(id: params[:id])
    if @photo && @photo.destroy
      render :show
    else
      render json: @photo.errors.full_messages, status: 401
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :description, :private, :file, :uploader_id, :views)
  end

end
