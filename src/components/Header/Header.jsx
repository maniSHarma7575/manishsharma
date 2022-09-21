import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from './Header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faGithub, faLinkedin, faDev, faTwitter, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { library} from "@fortawesome/fontawesome-svg-core";

library.add(fab, faDev, faGithub, faLinkedin, faTwitter, faStackOverflow)

const Header = ({title}) =>{

  const [hamburgerClass, setHamburgerClass] = useState('')
  const [navLinkClass, setNavLinkClass] = useState('')
  const [hamburger, setHamburger] = useState(false)

  const handleMenu = (state) => {
    if(state){
      setHamburgerClass('active')
      setNavLinkClass('visible')
    } else{
      setHamburgerClass('');
      setNavLinkClass('');
    }
    setHamburger(state)
  }

  return(
    <nav className="visible js-nav">
      <div className="container">
        <a href="/" className="nav-logo" title="Back to Homepage">
          Manish Sharma
        </a>
        <div className={`nav-links ${navLinkClass}`}>
          <a href="about" className="link">about</a>
          <a href="projects" className="link">projects</a>
          <a href="articles" className="link">blogs</a>
          <a href="/#contact" className="link">contact</a>
          <div className="social-media">
            <a href="https://www.github.com/maniSHarma7575" title="Github" target="_blank">
              <FontAwesomeIcon icon={['fab', 'github']}/>
            </a>
            <a href="https://twitter.com/ManishS77291587" title="Twitter" target="_blank">
              <FontAwesomeIcon icon={['fab', 'twitter']}/>
            </a>
            <a href="https://www.linkedin.com/in/heymanish/" title="LinkedIn" target="_blank">
              <FontAwesomeIcon icon={['fab', 'linkedin']}/>
            </a>
            <a href="https://stackoverflow.com/users/10013529/manish-sharma" title="Stackoverflow" target="_blank">
              <FontAwesomeIcon icon={['fab', 'stack-overflow']}/>
            </a>
            <a href="https://dev.to/manisharma7575" title="Dev" target="_blank">
              <FontAwesomeIcon icon={['fab', 'dev']}/>
            </a>
          </div>
        </div>
        <div className="nav-controls">
          <button 
            id="menu-display" 
            title="Show Menu" 
            className={`hamburger ${hamburgerClass}`} 
            onClick={() => handleMenu(!hamburger)} 
          />
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;