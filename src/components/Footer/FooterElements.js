// Filename - ./components/Navbar.js

// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #fbdf7e;
  // height: 9vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 0%;
  //   padding: 0.2rem calc((100vw - 1000px) / 2);
  //   z-index: 12;
  //   position: ;
  //   bottom: 0;
  //   left: 0;
`;

export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
`;

// export const Bars = styled(FaBars)`
//   display: none;
//   color: #808080;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

export const NavMenu = styled.div`
  display: flex;
  // align-items: center;
  margin-top: 0%;
  // margin-right: -24px;
  /* Second Nav */
  // /* margin-right: 24px; */
  /* Third Nav */
   /* width: 100vw;
  justify-content: space-between;
  white-space: nowrap;
`;
