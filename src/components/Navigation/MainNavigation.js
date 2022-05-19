import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(true);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    //React.Fragment doesent do anything other than we only return one root element
    <React.Fragment>
    {/*If drawerIsOpen = true we show the Backdrop component */}
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
{/* 
      <MainHeader>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader> */}
    </React.Fragment>
  );
};

export default MainNavigation;
