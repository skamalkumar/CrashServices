import React from "react";
import Layout from "../Layout";

const AdditionalServicesPage = () => {
  return (
    <Layout>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 bg-blue-100 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Additional Services
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            At Crash Services, we offer a range of additional services to meet
            all of your automotive repair and maintenance needs. From wheel
            alignment and tire rotation to interior detailing and windshield
            replacement, we've got you covered.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Wheel Alignment and Tire Rotation
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Proper wheel alignment and tire rotation are essential for
              maintaining the performance and longevity of your vehicle's tires.
              Our skilled technicians use state-of-the-art equipment to ensure
              your wheels are properly aligned and your tires wear evenly,
              extending their lifespan and improving fuel efficiency.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Interior Detailing
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our interior detailing service is designed to restore your
              vehicle's interior to like-new condition. Whether your interior
              has accumulated dirt, stains, or odors over time, our team can
              clean and refresh it, leaving it looking and smelling fresh and
              clean.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Windshield Replacement
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              A cracked or damaged windshield not only affects your vehicle's
              appearance but also compromises your safety on the road. Our
              windshield replacement service uses high-quality glass and
              professional installation techniques to ensure a secure and
              weatherproof seal, restoring visibility and safety to your
              vehicle.
            </p>
          </div>

          <div className="text-lg text-gray-600"></div>
        </div>
      </div>
    </Layout>
  );
};

export default AdditionalServicesPage;
