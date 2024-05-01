import React from "react";

const DentRepairPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Dent Repair Services
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        At Crash Services, we specialize in high-quality dent repair services to
        restore your vehicle's appearance and value. Our skilled technicians are
        trained in the latest dent repair techniques and use state-of-the-art
        equipment to ensure exceptional results.
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
          {/* Add more types of dents as needed */}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Repair Process
        </h2>
        <p className="text-lg text-gray-600 mb-2">
          Our dent repair process involves several steps to ensure a flawless
          finish:
        </p>
        <ol className="list-decimal pl-6">
          <li className="text-gray-600 mb-2">
            Assessment of the dent's size, location, and severity
          </li>
          <li className="text-gray-600 mb-2">
            Preparation of the damaged area, including cleaning and degreasing
          </li>
          <li className="text-gray-600 mb-2">
            Application of specialized tools and techniques to gently massage
            and reshape the metal
          </li>
          <li className="text-gray-600 mb-2">
            Final finishing and blending to restore the original contours of the
            vehicle
          </li>
          {/* Add more steps as needed */}
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
          <img
            src="/images/before1.jpg"
            alt="Before"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/images/before2.jpg"
            alt="Before"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/images/before3.jpg"
            alt="Before"
            className="rounded-lg shadow-lg"
          />
          {/* Add more before-and-after images as needed */}
        </div>
      </div>
    </div>
  );
};

export default DentRepairPage;
