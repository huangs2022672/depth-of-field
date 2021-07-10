require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Photo.destroy_all
# User.destroy_all

### USERS ###

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


### PHOTOS ###

# file = open('https://<your_bucket>.<your_region>.amazonaws.com/<optional_folder_name>/<some_file>.jpg')
# demo_user.avatar.attach(io: file, filename: 'some_file.jpg')


33.times do |i|
  j = i + 1
  photo = Photo.create!(
    title: "Title of photo ##{j}",
    description: "Description of Photo ##{j}",
    private: false,
    uploader_id: rand(1..5),
    views: rand(1..100)
  )
  photo.file.attach( io: open("https://depth-of-field-seeds.s3.amazonaws.com/seed_image_#{j}.jpg"), filename: "field_#{j}.jpg")
end
