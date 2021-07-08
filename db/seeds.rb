# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Photo.destroy_all
# User.destroy_all

user1 = User.create!(
  first_name: "Demo",
  last_name: "User",
  age: 25,
  email: "demouser@gmail.com",
  password: "1234567"
)

user2 = User.create!(
  first_name: "Sammy",
  last_name: "Huang",
  age: 34,
  email: "sammyhuang@gmail.com",
  password: "1234567"
)

user3 = User.create!(
  first_name: "Xue",
  last_name: "Ye",
  age: 29,
  email: "xueye@gmail.com",
  password: "1234567"
)

user4 = User.create!(
  first_name: "Hannah",
  last_name: "Huang",
  age: 15,
  email: "hannah@gmail.com",
  password: "1234567"
)

user5 = User.create!(
  first_name: "Henry",
  last_name: "Huang",
  age: 13,
  email: "henry@gmail.com",
  password: "1234567"
)

### for seeding locally ###

# p "Created #{User.count} users"

# 33.times do |i|
#   j = i + 1
#   photo = Photo.create!(
#     title: "Title of photo ##{j}",
#     description: "Description of Photo ##{j}",
#     private: false,
#     uploader_id: rand(1..5),
#     views: rand(1..100)
#   )
#   photo.file.attach( io: File.open("/mnt/f/AppAcademy/depth-of-field/app/assets/images/seed_images/seed_image_#{j}.jpg"), filename: "field_#{j}.jpg")
#   # puts photo.file.attached?

# end

# p "Created #{Photo.count} photos"


33.times do |i|
  j = i + 1
  photo = Photo.create!(
    title: "Title of photo ##{j}",
    description: "Description of Photo ##{j}",
    private: false,
    uploader_id: rand(1..5),
    views: rand(1..100)
  )
  photo.file.attach( io: File.open("#{image_url("seed_image_#{j}.jpg")}"), filename: "field_#{j}.jpg")
end




### first seeds ###

# Photo.delete_all
# p1 = Photo.create!(title: "first photo", uploader_id: 1)
# p1.file.attach( io: File.open("/mnt/f/session_bg.jpg"), filename: "session_bg.jpg")
# p2 = Photo.create!(title: "2nd photo", uploader_id: 1)
# p2.file.attach( io: File.open("/mnt/f/splash_bg.jpg"), filename: "splash_bg.jpg")
# p3 = Photo.create!(title: "my pc", uploader_id: 1)
# p3.file.attach( io: File.open("/mnt/f/my_pc.jpg"), filename: "my_pc.jpg")
#
# p "Created #{Photo.count} photos"
