json.extract! photo, :id, :title, :description, :private, :uploader_id, :views, :created_at
json.photo_url photo.photo_url || url_for(photo.file)