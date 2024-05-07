// Filename - "./components/Navbar.js

import React from "react";
import { Nav, NavLink, NavMenu } from "./FooterElements";

const Footer = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Work
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Footer;
