import React from "react";
import Layout from "../Layout";
import before1 from "../../images/frame_before1.jpg";
import before2 from "../../images/frame_before2.jpg";
import before3 from "../../images/frame_before3.jpg";
import after1 from "../../images/frame_after1.jpg";
import after2 from "../../images/frame_after2.jpg";
import after3 from "../../images/frame_after3.jpg";

const FrameRepairPage = () => {
  return (
    <Layout>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 bg-blue-100 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Frame Repair Services
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            At Crash Services, we specialize in frame repair services to restore
            your vehicle's structural integrity after a collision. Our skilled
            technicians use state-of-the-art equipment and advanced repair
            techniques to ensure your vehicle meets factory specifications and
            is safe to drive.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose Frame Repair?
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Frame repair offers several benefits for your vehicle:
            </p>
            <ul className="list-disc pl-6">
              <li className="text-gray-600 mb-2">
                Restores your vehicle's structural integrity
              </li>
              <li className="text-gray-600 mb-2">
                Ensures safety for you and your passengers
              </li>
              <li className="text-gray-600 mb-2">
                Preserves the value of your vehicle
              </li>
              {/* Add more benefits as needed */}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Repair Process
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Our frame repair process involves the following steps:
            </p>
            <ol className="list-decimal pl-6">
              <li className="text-gray-600 mb-2">
                Assessment of the frame's damage and extent of repair needed
              </li>
              <li className="text-gray-600 mb-2">
                Straightening and reinforcement of the frame using specialized
                equipment
              </li>
              <li className="text-gray-600 mb-2">
                Welding and bonding of damaged areas to restore strength
              </li>
              <li className="text-gray-600 mb-2">
                Final inspection to ensure quality and safety
              </li>
              {/* Add more steps as needed */}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Before-and-After
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Take a look at some examples of frame repairs we've performed:
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

export default FrameRepairPage;
