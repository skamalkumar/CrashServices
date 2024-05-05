import React from "react";
import Layout from "../Layout";
import before1 from "../../images/before1.jpg";
import before2 from "../../images/before2.jpg";
import before3 from "../../images/before3.jpg";
import after1 from "../../images/after1.jpg";
import after2 from "../../images/after2.jpg";
import after3 from "../../images/after3.jpg";

const PaintlessDentRepairPage = () => {
  return (
    <Layout>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 bg-blue-100 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Paintless Dent Repair Services
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            At Crash Services, we offer paintless dent repair (PDR) services to
            restore your vehicle's appearance without compromising its original
            paint finish. Our skilled technicians use specialized tools and
            techniques to gently massage out dents and dings, leaving your
            vehicle looking like new.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose Paintless Dent Repair?
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Paintless dent repair offers several advantages over traditional
              dent repair methods:
            </p>
            <ul className="list-disc pl-6">
              <li className="text-gray-600 mb-2">
                Preserves your vehicle's original paint finish
              </li>
              <li className="text-gray-600 mb-2">
                Faster repair times compared to conventional methods
              </li>
              <li className="text-gray-600 mb-2">
                Cost-effective solution for minor dents and dings
              </li>
              {/* Add more advantages as needed */}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              How Does Paintless Dent Repair Work?
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Our paintless dent repair process involves the following steps:
            </p>
            <ol className="list-decimal pl-6">
              <li className="text-gray-600 mb-2">
                Assessment of the dent's size, location, and severity
              </li>
              <li className="text-gray-600 mb-2">
                Access to the backside of the dent
              </li>
              <li className="text-gray-600 mb-2">
                Application of specialized tools to massage and reshape the
                metal
              </li>
              <li className="text-gray-600 mb-2">
                Final inspection to ensure a flawless finish
              </li>
              {/* Add more steps as needed */}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Before-and-After
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Take a look at some examples of dents we've repaired using our
              paintless dent repair technique:
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

export default PaintlessDentRepairPage;
