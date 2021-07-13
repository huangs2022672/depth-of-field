@follows.each do |follow|
  json.follows do
    json.set! follow.id do
      json.partial! 'follow', follow: follow
    end
  end

  json.users do
    json.set! follow.follower.id do
      json.extract! follow.follower, :id, :first_name, :last_name, :email, :created_at
    end
  end

  json.users do
    json.set! follow.followee.id do
      json.extract! follow.followee, :id, :first_name, :last_name, :email, :created_at
    end
  end

end
