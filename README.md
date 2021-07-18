# Welcome to [Depth-of-field](https://depth-of-field.herokuapp.com/)
Depth of Field, a clone of Flickr, is an app designed for photographers to upload and share their photos with the DOF community. Users can explore all the beautiful photos uploaded by other members and comment, like photos and follow their favorite photographers to see their activity.

## Depth of Field for anyone who:
* has an interest in photography
* wants to upload and showcase their best work
* wants to connect with other photographers
* wants to grow as a photographer and receive feedback from the community

## Getting Started:
* [Sign up](http://depth-of-field.herokuapp.com/#/signup) with your name, age, an email address and a password
* Go to the explore page to see everyone's uploads
* Click on a photo you liked to comment, like and connect with the photographer
* Upload your own photos / see all of your uploads

## Technologies used:
* Depth of field is hosted using [Heroku](https://www.heroku.com/about)
* Photos are stored on [AWS-s3](https://aws.amazon.com/)
* The backend is built on [Ruby on Rails](https://rubyonrails.org/)
* The frontend is built with [React](https://reactjs.org/) and [Redux](https://redux.js.org/)

## Core Features:
### Photos:
* Viewing all uploaded photos
* Viewing one photo with addtional information
--* uploader and a link to their profile, with the ability to follow/unfollow
--* comments that are associated with the photo
* Upload new photos with a title and a short description
* Edit an existing photo's title and description
* Delete photos you no longer want
* Set photo to private if you do not want to share

### Comments:
* Under a photo's page view all comments for the photo
* Write a new comment
* Edit/delete your own comments

## CODE:
### Photo carousel on the splash page
#### Using React:
* when the SplashBG component is mounted, componentDidMount() will call setInterval() to update the current bgImages to the next photo in the bgImages array.

### Uploading a new photo
