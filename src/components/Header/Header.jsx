import React from "react";
import PropTypes from 'prop-types';
import styles from './Header.module.css'

const Header = ({title}) =>{
  return(
    <nav className="js-nav">
      <div className="container">
        <a href="/" class="nav-logo" title="Back to Homepage">
          Manish Sharma
        </a>
        <div className="nav-links">
          <a href="about" className="link">about</a>
          <a href="projects" className="link">projects</a>
          <a href="articles" className="link">blogs</a>
          <a href="/#contact" className="link">contact</a>
          <div className="social-media">
            <a href="https://www.github.com" title="Github">
              <i className="demo-icon icon-github-circled"></i>
            </a>
            <a href="https://www.twitter.com" title="Twitter">
              <i className="demo-icon icon-twitter"></i>
            </a>
            <a href="" title="Medium">
              <i className="demo-icon icon-medium"></i>
            </a>
            <a href="https://codepen.io/" title="Codepen">
              <i className="demo-icon icon-codeopen"></i>
            </a>
            <a href="https://www.linkedin.com/" title="LinkedIn">
              <i className="demo-icon icon-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="nav-controls">
          <button id="menu-display" title="Show Menu" className="hamburger"></button>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;