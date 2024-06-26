// Filename - "./components/Navbar.js

import React from "react";
import { Nav, NavLink, NavMenu } from "./FooterElements";

const Footer = () => {
  return (
    <>
      <Nav className="footer">
        <div className="footer-thanks">
          <h1 font-size={"0.5 rem"}>Thanks for stopping by!</h1>
          <h3>
            Made with vanilla lattes, multiple spotify playlists, and a Costco
            sized bag of goldfish
          </h3>
        </div>

        <div className="contact">
          <h3>Contact me! (pls)</h3>
          <a href="mailto:sydney_meza@brown.edu" target="_blank">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/sydney-meza-b392072a2/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>

        <NavMenu className="navigation">
          <h3>Navigation</h3>
          <NavLink to="/#work" activeStyle>
            Work
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>

          <a
            href={process.env.PUBLIC_URL + "/sydney_meza_resume.pdf"}
            target="_blank"
          >
            Resume
          </a>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Footer;
