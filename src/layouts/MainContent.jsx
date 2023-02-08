import React from "react";
import { Route, Routes } from "react-router-dom";

// Import Project files
import ScanCode from "../projects/scan-qr-code/ScanCode";
import AdviceGenerator from "../projects/advice-generator/AdviceGenerator";

const MainContent = () => {
  return (
    <div className="sm:ml-64">
      <Routes>
        <Route path="/scan-qr-code" element={<ScanCode />} />
        <Route path="/advice-generator" element={<AdviceGenerator />} />
      </Routes>
    </div>
  );
};

export default MainContent;
