import { useEffect, useState } from 'react'
import Logo from "../../assets/images/logo512.png"
import {
   faAngular,
   faCss3,
   faGitAlt,
   faHtml5,
   faJsSquare,
   faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Card from '../Card'

const About = () => {
   const [letterClass, setLetterClass] = useState('text-animate')

   useEffect(() => {
      return setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 3000)
   }, [])

   return (
      <>
         <div className="wave" style={{ background: ' #66BBC6' }}></div>
         <div className="container about-page">
            <div className="text-zone">
               <h1>The Team</h1>

               <div className="card">
                  <div className="image-box">
                     <img src={Logo} />
                  </div>

                  <div className="content">
                     <div className="details">
                        <h2>
                           Henrik
                           <br />
                           <span>Full Nerd</span>
                           <br />
                        </h2>
                        <div className="data">
                           <h3>
                              342<span>Posts</span>
                           </h3>
                           <h3>
                              342<span>Followers</span>
                           </h3>
                           <h3>
                              342<span>Following</span>
                           </h3>
                        </div>
                        <div className="actionBtn">
                           <button>Follow</button>
                           <button>Message</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Loader type="pacman" />
      </>
   )
}

export default About
