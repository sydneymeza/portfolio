// Filename - App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import MenomineeRedesign from "./pages/menomineeRedesign";
import WarpHome from "./pages/warpHome";
import MixMate from "./pages/mixMate";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToAnchor from "./components/ScrollToAnchor";


function App() {
  return (
    <Router>
    <ScrollToTop />
    <ScrollToAnchor/>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="" />
        <Route path="/about" element={<About />} />
        <Route path="/menomineeRedesign" element={<MenomineeRedesign />} />
        <Route path="/warpHome" element={<WarpHome />} />
        <Route path="/mixMate" element={<MixMate />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
