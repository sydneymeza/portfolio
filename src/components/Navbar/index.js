// Filename - "./components/Navbar.js

import React, {useState} from "react";
import { Nav, NavLink, NavMenu, Bars, Times} from "./NavbarElements";
import "./navbar.css";

const Navbar = () => {

  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter =() =>{
  //   if(window.innerWidth <1060){
  //     setDropdown(false);
  //   } else{
  //     setDropdown(true);
  //   }
  // }


  return (
    <>
      <Nav>
        <NavLink to="/" activeStyle>
          <img
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            height="40"
            alt="sydney's 'logo' which is her initial + a star graphic"
          ></img>
        </NavLink>
        {click ? (
          <Times onClick={handleClick} />
        ) : (
          <Bars onClick={handleClick} />
        )}
        {/* // <Bars onClick={handleClick} />
          // <i className={click ? "fas fa-times" : "fas fa-bars"} /> */}

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
          <NavLink
            to="/#work"
            onClick={closeMobileMenu}
            activeStyle
            className="nav-links"
          >
            Work
          </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              onClick={closeMobileMenu}
              activeStyle
              className="nav-links"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <a
              href="https://reactrouter.com/en/main/components/link"
              target="_blank"
              onClick={closeMobileMenu}
              className="nav-links"
            >
              Resume
            </a>
          </li>
        </ul>
      </Nav>
    </>
  );
};

export default Navbar;
