# debugger
json.extract! photo, :id, :title, :description, :private, :uploader_id, :views, :created_at
if photo.file.attached?
  # debugger
  json.img_url url_for(photo.file)
end
