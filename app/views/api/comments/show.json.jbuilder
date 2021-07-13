json.comment do
  json.partial! 'comment', comment: @comment
end

json.user do
  json.extract! @comment.commenter, :id, :first_name, :last_name, :email, :created_at
end
