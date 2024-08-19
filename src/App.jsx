import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import AcercaDeMi from "./components/AcercaDeMi";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
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
