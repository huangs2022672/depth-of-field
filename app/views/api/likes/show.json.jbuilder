json.like do
  json.partial! 'like', like: @like
end

# json.user do
#   json.extract! @like.liker, :id, :first_name, :last_name, :email, :created_at
# end

# json.photo do
#   json.extract! @like.photo, :id, :title, :description, :private, :uploader_id, :views, :created_at
#   if @like.photo.file.attached?
#     json.img_url url_for(@like.photo.file)
#   end
# end
