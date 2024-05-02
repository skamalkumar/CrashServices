import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTools,
  faInfoCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-4 rounded-md">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center justify-center lg:justify-start">
          <Logo />
          <div className="ml-4">
            <h1 className="text-2xl font-semibold">Crash Services</h1>
            <p className="text-lg">
              Your Vehicle's Road to{" "}
              <span style={{ color: "#FFD700" }}>Recovery</span> Starts Here!
            </p>
          </div>
        </div>
        <nav className="mt-4 lg:mt-0">
          <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:space-y-0">
            <li>
              <a href="#" className="flex items-center hover:text-gray-300">
                <FontAwesomeIcon icon={faHome} className="mr-1" /> Home
              </a>
            </li>
            <li className="relative group">
              <a href="#" className="flex items-center hover:text-gray-300">
                <FontAwesomeIcon icon={faTools} className="mr-1" /> Services
              </a>
              <div className="absolute hidden bg-white py-2 rounded-md shadow-md z-10 group-hover:block">
                <a
                  href="/services/dent-repair"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-200"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Dent Repair
                </a>
                <a
                  href="/services/scratch-repair"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-200"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Scratch Repair
                </a>
                <a
                  href="/services/paintless-dent-repair"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-200"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Paintless Dent Repair
                </a>
                <a
                  href="/services/panel-replacement"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-200"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Panel Replacement
                </a>
                <a
                  href="/services/frame-repair"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-200"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Frame Repair
                </a>
                <a
                  href="/services/additional-services"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-200"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Additional Services
                </a>
              </div>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-gray-300">
                <FontAwesomeIcon icon={faInfoCircle} className="mr-1" /> About
                Us
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-gray-300">
                <FontAwesomeIcon icon={faEnvelope} className="mr-1" /> Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
