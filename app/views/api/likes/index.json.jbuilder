@likes.each do |like|
  json.likes do
    json.set! like.id do
      json.partial! 'like', like: like
    end
  end

  # json.users do
  #   json.set! like.liker.id do
  #     json.extract! like.liker, :id, :first_name, :last_name, :email, :created_at
  #   end
  # end

  # json.photos do
  #   json.set! like.photo.id do
  #     json.extract! like.photo, :id, :title, :description, :private, :uploader_id, :views, :created_at
  #     if like.photo.file.attached?
  #       json.img_url url_for(like.photo.file)
  #     end
  #   end
  # end

end
