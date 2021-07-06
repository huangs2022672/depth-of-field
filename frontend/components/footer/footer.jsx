import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="footer-nav">
    <div className="footer-text-links">
      <Link to="/a">A</Link>
      <Link to="/bunch">Bunch</Link>
      <Link to="/of">Of</Link>
      <Link to="/links">Links</Link>
    </div>
    <div className="footer-icon-links">
      <a href="https://github.com/huangs2022672/depth-of-field"><i className="fa fa-github-square fa-lg"></i></a>
      <Link to="/linkedin"><i className="fa fa-linkedin-square fa-lg"></i></Link>
    </div>    
  </footer>
)

export default Footer;