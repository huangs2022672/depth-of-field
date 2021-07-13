json.follow do
  json.partial! 'follow', follow: @follow
end

json.user do
  json.extract! @follow.follower, :id, :first_name, :last_name, :email, :created_at
end

json.user do
  json.extract! @follow.followee, :id, :first_name, :last_name, :email, :created_at
end
