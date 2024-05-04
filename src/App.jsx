import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/Services/ServicesPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import DentRepairPage from "./components/Services/DentRepairPage";
import ScratchRepairPage from "./components/Services/ScratchRepairPage";
import PaintlessDentRepairPage from "./components/Services/PaintlessDentRepairPage";
import PanelReplacementPage from "./components/Services/PanelReplacementPage";
import FrameRepairPage from "./components/Services/FrameRepairPage";
import AdditionalServicesPage from "./components/Services/AdditionalServicesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/services" element={<ServicesPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route
            exact
            path="/services/dent-repair"
            element={<DentRepairPage />}
          />
          <Route
            exact
            path="/services/scratch-repair"
            element={<ScratchRepairPage />}
          />
          <Route
            exact
            path="/services/paintless-dent-repair"
            element={<PaintlessDentRepairPage />}
          />
          <Route
            exact
            path="/services/panel-replacement"
            element={<PanelReplacementPage />}
          />
          <Route
            exact
            path="/services/frame-repair"
            element={<FrameRepairPage />}
          />
          <Route
            exact
            path="/services/additional-services"
            element={<AdditionalServicesPage />}
          />
          {/* Add more routes for other service pages */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
