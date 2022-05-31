import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Portfolio from "../portfolio/Portfolio";
const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
    <div className="container projects-page">
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
    </div>
    <Loader type="line-scale-pulse-out-rapid" />
    </>
  );
};

export default Projects;
