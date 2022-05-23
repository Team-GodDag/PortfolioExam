import { useEffect } from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {

   const [bgColor, setBgColor] = useState('#FFAE35')

   function changeColor(newColor) {
      setBgColor(newColor)
   }


   return (
      <div className="App">
         <div className="wave" style={{ background: bgColor }}></div>
         <Sidebar
            // changeBgColor={bgColor => setBgColor(bgColor)}
            // setBgColor={setBgColor}
            setBgColor={changeColor}
         />
         <div className="page">
            <span className="tags top-tags">
               <span className="bottom-tag-html">&lt;html&gt;</span>

               <br />
               &lt;body&gt;</span>
            <Outlet />
            <span className="tags bottom-tags">
               &lt;/body&gt;
               <br />
               <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>
         </div>
      </div>
   )
}

export default Layout
