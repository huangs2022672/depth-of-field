# json.partial! 'photo', photo: @photo

json.photo do
  json.partial! 'photo', photo: @photo
end

json.user do
  json.extract! @photo.uploader, :id, :first_name, :last_name, :email, :created_at
end
