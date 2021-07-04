if false
  ### User validation tests

  ## test User.new w/ correct user_params
  user_params = {first_name: 'Sammy', last_name: 'Huang', age: 34, email: 'sammyhuang@gmail.com', password: 'password'}
  sammy = User.new(user_params)
  sammy.save
  ## works // saved to db


  ## test first_name, last_name validations length 2..20
  user_params = {first_name: 'S', last_name: 'Huang', age: 34, email: 'shuang@gmail.com', password: 'password'}
  sammy = User.new(user_params)
  sammy.save
  ## failed // validation kicks in when saving to db(.save/.create) not at initialize(.new) 
  sammy.errors.full_messages
  ## array of strings of errors ["First name is too short (minimum is 2 characters)"]


  ## test age must be 13+
  user_params = {first_name: 'Sam', last_name: 'Huang', age: 12, email: 'samhuang@gmail.com', password: 'password'}
  sammy = User.new(user_params)
  sammy.save
  sammy.errors.full_messages
  ## failed // ["Age must be greater than or equal to 13"]


  ## test email format (@ .)
  user_params = {first_name: 'Sam', last_name: 'Huang', age: 34, email: 'samhuang@gmailcom', password: 'password'}
  sammy = User.new(user_params)
  sammy.save
  sammy.errors.full_messages
  ## failed // ["Email is invalid"]

end