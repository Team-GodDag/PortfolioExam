import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group'; //Have to install it with npm install react-transition-group

import './SideDrawer.css';

const SideDrawer = props => {
  const content = (

    
      <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
  );

  //We use ReactDOM.createPortal to specify where in the Dom we want to render the content.
  //We render the content variable in the div with the class id = drawer-hook. We made the div in index.html in the public folder

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
