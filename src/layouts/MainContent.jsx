import React from "react";
import { Route, Routes } from "react-router-dom";

// Import Project files
import Home from "./Home";
import ScanCode from "../projects/scan-qr-code/ScanCode";
import AdviceGenerator from "../projects/advice-generator/AdviceGenerator";
import TipCalCulator from "../projects/tip-calculator/TipCalCulator";
import RestCountries from "../projects/rest-countries/RestCountries";

const MainContent = () => {
  return (
    <div className="sm:ml-64">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan-qr-code" element={<ScanCode />} />
        <Route path="/advice-generator" element={<AdviceGenerator />} />
        <Route path="/tip-calculator-app" element={<TipCalCulator />} />
        <Route path="/rest-countries-api" element={<RestCountries />} />
      </Routes>
    </div>
  );
};

export default MainContent;
