@comments.each do |comment|
  json.comments do
    json.set! comment.id do
      json.partial! 'comment', comment: comment
    end
  end

  json.users do
    json.set! comment.commenter.id do
      json.extract! comment.commenter, :id, :first_name, :last_name, :email, :created_at
    end
  end

end
