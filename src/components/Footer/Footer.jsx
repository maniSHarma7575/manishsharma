import React from "react";
import styles from './Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faGithub, faLinkedin, faDev, faTwitter, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { library} from "@fortawesome/fontawesome-svg-core";

library.add(fab, faDev, faGithub, faLinkedin, faTwitter, faStackOverflow)

const Footer = () =>{
  return(
    <footer>
      <div className="container">
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
        <div className="copyright">
          &copy; designed & built by <a href="https://manishsharma.ml">Manish Sharma</a> <span
            className="heart">&hearts;</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;