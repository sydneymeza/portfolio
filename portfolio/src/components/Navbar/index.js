// Filename - "./components/Navbar.js

import React from "react";
import { Nav, NavLink, NavMenu} from "./NavbarElements";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            <img
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              height="40"
              alt="sydney's 'logo' which is her initial + a star graphic"
            ></img>
          </NavLink>
          <NavLink to="/" activeStyle>
            Work
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <a href="https://reactrouter.com/en/main/components/link" target="_blank">Resume</a>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
