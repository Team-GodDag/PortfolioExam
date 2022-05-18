import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import EmployeeList from "../EmployeeList";
import Portfolio from "../portfolio/Portfolio";
const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="container about-page">
      <div className="wave" style={{ background: " #66BBC6" }}></div>
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["P", "r", "o", "j", "e", "c ", "t", "s"]}
            idx={15}
          />
        </h1>
      </div>
      <div className="portfolio-section">
      <Portfolio/>  
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Projects;
