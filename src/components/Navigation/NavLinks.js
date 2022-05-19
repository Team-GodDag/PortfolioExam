import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <div className="nav-bar">

    {/* <Link className="logo" to="/">
  <img src={GDLogo} alt="logo"/>
  </Link> */}
    <nav className="main-navigation__header-nav">
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faPeopleGroup} color="#4d4d4e" />
      </NavLink>
      <NavLink
        activeclassname="active"
        className="projects-link"
        to="/projects"
      >
        <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e" />
      </NavLink>
      <NavLink
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/bobangajicsm"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
  );
};

export default NavLinks;
