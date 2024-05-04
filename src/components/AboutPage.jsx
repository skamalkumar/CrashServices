import React from "react";
import Layout from "./Layout";

const AboutUsPage = () => {
  return (
    <Layout>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 bg-blue-100 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-lg text-gray-600 mb-8">
            Crash Services is a leading provider of automotive repair and
            maintenance services. With years of experience in the industry, we
            pride ourselves on delivering high-quality workmanship and excellent
            customer service.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Our team of skilled technicians is dedicated to restoring your
            vehicle to its pre-accident condition, using state-of-the-art
            equipment and advanced repair techniques. Whether you need dent
            repair, scratch removal, or frame straightening, you can trust us to
            get the job done right.
          </p>
          <p className="text-lg text-gray-600">
            At Crash Services, we understand the importance of your vehicle in
            your daily life. That's why we strive to provide efficient and
            reliable service, so you can get back on the road safely and
            quickly. Customer satisfaction is our top priority, and we'll go
            above and beyond to exceed your expectations.
          </p>

          {/* Insert the article here */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Legacy of Excellence
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              With decades of experience in the automotive repair industry,
              Crash Services has established itself as a beacon of excellence
              and reliability. From our humble beginnings to our current
              standing as a leading provider of comprehensive automotive
              solutions, our journey has been defined by a relentless pursuit of
              excellence and a dedication to serving our customers with
              integrity and professionalism.
            </p>
            {/* Add more sections of the article as needed */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
