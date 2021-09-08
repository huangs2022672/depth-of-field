import React from 'react';

const Footer = () => (
  <footer className="footer-nav">
    <div className="footer-text-links">
      <h3>This site is a clone of </h3>
      <a href="https://www.flickr.com/" target="_blank">
        <img className="flickr-logo" src={window.flickrLogo} alt="Flickr Logo" />
      </a>
    </div>
    <div className="footer-icon-links">
      <a href="http://www.sammyhuang.me/" target="_blank"><img className="profile-icon" src={window.profileIcon} alt="profile icon" /></a>
      <a href="https://github.com/huangs2022672/depth-of-field" target="_blank"><i className="fa fa-github-square fa-lg"></i></a>
      <a href="https://www.linkedin.com/in/sammy-huang/" target="_blank"><i className="fa fa-linkedin-square fa-lg"></i></a>
      <a href="https://angel.co/u/sammy-huang-3" target="_blank"><i className="fa fa-angellist fa-lg"></i></a>
      <a href="https://www.flickr.com/photos/sammy-huang/" target="_blank"><i className="fa fa-flickr fa-lg"></i></a>
    </div>
  </footer>
)

export default Footer;
