import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar2 from "./components/content/NavBar2";

import Home from "./components/content/Home";

import AcercaDeMi from "./components/content/AcercaDeMi";
import Portfolio from "./components/content/Portfolio";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AcercadeMi" element={<AcercaDeMi />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
