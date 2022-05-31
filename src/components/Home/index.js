import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";

import "./index.scss";

const Home = () => {
   const [letterClass, setLetterClass] = useState("text-animate");

   const nameArray = ["T", "e", "a", "m", " ", "G", "o", "d", "d", "a", "g"];

   useEffect(() => {
      return setTimeout(() => {
         setLetterClass("text-animate-hover");
      }, 3000);
   }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>W</span>
            <span className={`${letterClass} _14`}>e'</span>
            <span className={`${letterClass} _15`}>r</span>
            <span className={`${letterClass} _16`}>e</span>
            <span className={`${letterClass} _17`}> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={18}
            />
          </h1>
          <h2 className="skill-description">
            Full Stack Developers / UX Designers
          </h2>
        </div>
      </div>

      <Loader type="line-scale-pulse-out-rapid" />
      </>
   );
};

export default Home;
