import React from "react";
import Layout from "../Layout";

const ScratchRepairPage = () => {
  return (
    <Layout>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 bg-blue-100 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Scratch Repair Services
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            At Crash Services, we offer professional scratch repair services to
            restore your vehicle's paint and finish. Our expert technicians are
            equipped with the latest tools and techniques to ensure seamless
            repairs and a flawless finish.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Types of Scratches
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Scratches on your vehicle can vary in depth and severity. Here are
              some common types of scratches we can repair:
            </p>
            <ul className="list-disc pl-6">
              <li className="text-gray-600 mb-2">
                Surface scratches: These are minor scratches that only affect
                the clear coat layer.
              </li>
              <li className="text-gray-600 mb-2">
                Deep scratches: These scratches penetrate the paint layers and
                may expose the metal underneath.
              </li>
              <li className="text-gray-600 mb-2">
                Key scratches: These are deliberate scratches caused by keys or
                other sharp objects.
              </li>
              {/* Add more types of scratches as needed */}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Repair Process
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Our scratch repair process involves several steps to restore your
              vehicle's paint and finish:
            </p>
            <ol className="list-decimal pl-6">
              <li className="text-gray-600 mb-2">
                Assessment: We assess the extent of the damage and determine the
                best repair approach.
              </li>
              <li className="text-gray-600 mb-2">
                Preparation: We clean and prep the damaged area to ensure proper
                adhesion of the repair materials.
              </li>
              <li className="text-gray-600 mb-2">
                Filling and Sanding: We fill in deep scratches and sand the area
                to smooth out imperfections.
              </li>
              <li className="text-gray-600 mb-2">
                Painting: We match the paint color and apply it to the repaired
                area for a seamless finish.
              </li>
              {/* Add more steps as needed */}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Before-and-After
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Here are some examples of scratches we've repaired:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <img
                src="/src/images/scratch_before1.jpg"
                alt="Before"
                className="rounded-lg shadow-lg w-64 h-48 object-cover"
              />
              <img
                src="/src/images/scratch_before2.jpg"
                alt="Before"
                className="rounded-lg shadow-lg w-64 h-48 object-cover"
              />
              <img
                src="/src/images/scratch_before3.jpg"
                alt="Before"
                className="rounded-lg shadow-lg w-64 h-48 object-cover"
              />
              <img
                src="/src/images/scratch_after1.jpg"
                alt="After"
                className="rounded-lg shadow-lg w-64 h-48 object-cover"
              />
              <img
                src="/src/images/scratch_after2.jpg"
                alt="After"
                className="rounded-lg shadow-lg w-64 h-48 object-cover"
              />
              <img
                src="/src/images/scratch_after3.jpg"
                alt="After"
                className="rounded-lg shadow-lg w-64 h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ScratchRepairPage;
