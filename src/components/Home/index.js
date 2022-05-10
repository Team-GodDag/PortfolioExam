import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
//import LogoTitle from '../../assets/images/logo-s.png'
//import Logo from './Logo'
import './index.scss'

const Home = () => {
   const [letterClass, setLetterClass] = useState('text-animate')

   const nameArray = ['T', 'e', 'a', 'm', ' ', 'G', 'o', 'd', 'd', 'a', 'g']
   const jobArray = [
      'w',
      'e',
      'b',
      ' ',
      'd',
      'e',
      'v',
      'e',
      'l',
      'o',
      'p',
      'e',
      'r',
      's',
      '.'
   ]

   useEffect(() => {
      return setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 4000)
   }, [])

   return (
      <>
         <div className="wave" style={{ background: ' #FFAE35' }}></div>
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
                  <span className={`${letterClass} _16`}> </span>
                  <AnimatedLetters
                     letterClass={letterClass}
                     strArray={nameArray}
                     idx={21}
                  />
                  <br />
                  <AnimatedLetters
                     letterClass={letterClass}
                     strArray={jobArray}
                     idx={22}
                  />
               </h1>
               <h2 className="skill-description">Front End Developer / JavaScript Expert / Full Stack Developer</h2>

            </div>
         </div>

         <Loader type="ball-scale-ripple" />
      </>
   )
}

export default Home
