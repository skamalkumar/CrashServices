import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import before1 from "../../images/before1.jpg";
import before2 from "../../images/before2.jpg";
import before3 from "../../images/before3.jpg";
import after1 from "../../images/after1.jpg";
import after2 from "../../images/after2.jpg";
import after3 from "../../images/after3.jpg";

const DentRepairPage = () => {
  return (
    <Layout>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 bg-blue-100 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Dent Repair Services
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            At Crash Services, we specialize in high-quality dent repair
            services to restore your vehicle's appearance and value. Our skilled
            technicians are trained in the latest dent repair techniques and use
            state-of-the-art equipment to ensure exceptional results.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Types of Dents
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Dents come in various shapes and sizes, each requiring different
              repair methods. Some common types of dents we can repair include:
            </p>
            <ul className="list-disc pl-6">
              <li className="text-gray-600 mb-2">Minor dents</li>
              <li className="text-gray-600 mb-2">Creases</li>
              <li className="text-gray-600 mb-2">Hail damage</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Repair Process
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Our dent repair process involves several steps to ensure a
              flawless finish:
            </p>
            <ol className="list-decimal pl-6">
              <li className="text-gray-600 mb-2">
                Assessment of the dent's size, location, and severity
              </li>
              <li className="text-gray-600 mb-2">
                Preparation of the damaged area, including cleaning and
                degreasing
              </li>
              <li className="text-gray-600 mb-2">
                Application of specialized tools and techniques to gently
                massage and reshape the metal
              </li>
              <li className="text-gray-600 mb-2">
                Final finishing and blending to restore the original contours of
                the vehicle
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Before-and-After
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Take a look at some examples of dents we've repaired:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={before1} alt="Before" className="w-full h-auto" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={before2} alt="Before" className="w-full h-auto" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={before3} alt="Before" className="w-full h-auto" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={after1} alt="After" className="w-full h-auto" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={after2} alt="After" className="w-full h-auto" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={after3} alt="After" className="w-full h-auto" />
              </div>
            </div>
          </div>
          <div className="text-center mt-8"></div>
        </div>
      </div>
    </Layout>
  );
};

export default DentRepairPage;
