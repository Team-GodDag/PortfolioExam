import "./index.scss";
import GDLogo from "../../assets/images/PLAINsmalllogo.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faLinkedin,
   faGithub,
   faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
   faHome,
   faPeopleGroup,
   faLightbulb,
   faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ setBgColor }) => {  
   return (
      <>
         <div className="mobile-nav">
            <nav className="main-navigation__header-nav">
               <ul>
                  <NavLink
                     exact="true"
                     activeclassname="active-home"
                     to="/"
                     onClick={() => setBgColor('#FFAE35')}>
                     
                     <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                  </NavLink>
                  <NavLink
                     activeclassname="active-about"
                     className="about-link"
                     to="/about">
                     <FontAwesomeIcon icon={faPeopleGroup} color="#4d4d4e" />
                  </NavLink>
                  <NavLink
                     activeclassname="active-projects"
                     className="projects-link"
                     to="/projects"
                  >
                     <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e" />
                  </NavLink>
                  <NavLink
                     activeclassname="active-contact"
                     className="contact-link"
                     to="/contact"
                  >
                     <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                  </NavLink>
               </ul>
            </nav>
         </div>

         <div className="nav-bar">
            <Link className="logo"
               to="/"
               onClick={() => setBgColor('#FFAE35')} 
            >
               <img src={GDLogo} alt="logo" />
            </Link>
            <nav className="main-navigation__header-nav">
               <NavLink
                  exact="true"
                  activeclassname="active home"
                  to="/"
                  onClick={() => setBgColor('#FFAE35')} 
               >
                  <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
               </NavLink>
               <NavLink
                  activeclassname="active"
                  className="about-link"
                  to="/about"
                  onClick={() => setBgColor('#62C1CB')} 
               >
                  <FontAwesomeIcon icon={faPeopleGroup} color="#4d4d4e" />
               </NavLink>
               <NavLink
                  activeclassname="active"
                  className="projects-link"
                  to="/projects"
                  onClick={() => setBgColor('#E1645F')} 
               >
                  <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e" />
               </NavLink>
               <NavLink
                  activeclassname="active"
                  className="contact-link"
                  to="/contact"
                  onClick={() => setBgColor('#36AE7C')}
               >
                  <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
               </NavLink>
            </nav>
            <ul>
               <li>
                  <a
                     href="https://www.linkedin.com"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                  </a>
               </li>
               <li>
                  <a
                     href="https://github.com/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                  </a>
               </li>
               <li>
                  <a
                     href="https://www.youtube.com"
                     rel="noreferrer"
                     target="_blank"
                  >
                     <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                  </a>
               </li>
            </ul>
         </div>
      </>
   );
};

export default Sidebar;
