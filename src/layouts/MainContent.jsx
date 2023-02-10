import React from "react";
import { Route, Routes } from "react-router-dom";

// Import Project files
import ScanCode from "../projects/scan-qr-code/ScanCode";
import AdviceGenerator from "../projects/advice-generator/AdviceGenerator";
import TipCalCulator from "../projects/tip-calculator/TipCalCulator";

const MainContent = () => {
  return (
    <div className="sm:ml-64">
      <Routes>
        <Route path="/scan-qr-code" element={<ScanCode />} />
        <Route path="/advice-generator" element={<AdviceGenerator />} />
        <Route path="/tip-calculator-app" element={<TipCalCulator />} />
      </Routes>
    </div>
  );
};

export default MainContent;
