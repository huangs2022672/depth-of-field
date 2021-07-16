import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="footer-nav">
    <div className="footer-text-links">
      <h3>This site is a clone of </h3>
      <a href="https://www.flickr.com/">
        <img className="flickr-logo" src={window.flickrLogo} alt="Flickr Logo" />
      </a>
    </div>
    <div className="footer-icon-links">
      <a href="https://github.com/huangs2022672/depth-of-field"><i className="fa fa-github-square fa-lg"></i></a>
      <a href="https://www.linkedin.com/school/app-academy/"><i className="fa fa-linkedin-square fa-lg"></i></a>
    </div>
  </footer>
)

export default Footer;
