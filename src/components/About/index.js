import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import EmployeeList from '../EmployeeList'

const About = () => {

   const [letterClass, setLetterClass] = useState('text-animate')

   useEffect(() => {
      return setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 3000)
   }, [])


   return (
      <>
      <div className="container about-page">
         <div className="text-zone">
            <h1>
               <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['T', 'h', 'e', ' ', 't', 'e ', 'a', 'm']}
                  idx={15}
               />
            </h1>
         </div>

         <EmployeeList />         
      </div>
      <Loader type="line-scale-pulse-out-rapid"  />
      </>
   )
}

export default About;
