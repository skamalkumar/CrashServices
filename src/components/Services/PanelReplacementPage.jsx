import React from "react";
import Layout from "../Layout";
import before1 from "../../images/carpanel_before1.jpg";
import before2 from "../../images/carpanel_before2.jpg";
import before3 from "../../images/carpanel_before3.jpg";
import after1 from "../../images/carpanel_after1.jpg";
import after2 from "../../images/carpanel_after2.jpg";
import after3 from "../../images/carpanel_after3.jpg";

const PanelReplacementPage = () => {
  return (
    <Layout>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 bg-blue-100 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Panel Replacement Services
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            At Crash Services, we offer panel replacement services to restore
            your vehicle's damaged panels to their original condition. Whether
            your panels have been dented, scratched, or otherwise damaged, our
            skilled technicians can replace them with brand new ones, ensuring a
            perfect fit and finish.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose Panel Replacement?
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Panel replacement offers several advantages over repair methods:
            </p>
            <ul className="list-disc pl-6">
              <li className="text-gray-600 mb-2">
                Ensures a seamless fit and finish
              </li>
              <li className="text-gray-600 mb-2">
                Restores your vehicle's structural integrity
              </li>
              <li className="text-gray-600 mb-2">
                Saves time compared to repair techniques
              </li>
              {/* Add more advantages as needed */}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Panel Replacement Process
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Our panel replacement process involves the following steps:
            </p>
            <ol className="list-decimal pl-6">
              <li className="text-gray-600 mb-2">
                Assessment of the damage and identification of affected panels
              </li>
              <li className="text-gray-600 mb-2">
                Removal of the damaged panels
              </li>
              <li className="text-gray-600 mb-2">
                Installation of brand new panels
              </li>
              <li className="text-gray-600 mb-2">
                Final inspection to ensure quality and fit
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Before-and-After
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Take a look at some examples of panel replacements we've
              performed:
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

export default PanelReplacementPage;
