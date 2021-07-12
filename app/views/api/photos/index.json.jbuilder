@photos.each do |photo|
  json.photos do
    json.set! photo.id do
      json.partial! 'photo', photo: photo
    end
  end

  json.users do
    json.set! photo.uploader.id do
      json.extract! photo.uploader, :id, :first_name, :last_name, :email, :created_at
    end
  end

end
