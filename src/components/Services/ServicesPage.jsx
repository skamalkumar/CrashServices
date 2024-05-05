import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

const ServicesPage = () => {
  return (
    <Layout>
      <div className="bg-gray-200 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-100 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Dent Repair</h2>
              <p className="text-gray-700 mb-4">
                Our dent repair service is designed to restore your vehicle's
                appearance after it has been dented. Whether it's from a minor
                collision or a parking lot ding, our skilled technicians use
                specialized tools and techniques to carefully remove dents
                without damaging your vehicle's paint.
              </p>
              <Link
                to="/services/dent-repair"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-blue-100 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Scratch Repair</h2>
              <p className="text-gray-700 mb-4">
                Our scratch repair service is perfect for addressing those
                unsightly scratches and paint imperfections on your vehicle.
                Using industry-leading techniques and materials, we can restore
                your vehicle's paint finish to its original condition, leaving
                it looking like new.
              </p>
              <Link
                to="/services/scratch-repair"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-blue-100 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                Paintless Dent Repair
              </h2>
              <p className="text-gray-700 mb-4">
                Paintless dent repair (PDR) is a cost-effective and efficient
                method for fixing minor dents and dings on your vehicle. Our
                skilled technicians use specialized tools to gently massage the
                dent out from the inside, preserving your vehicle's original
                paint finish and saving you time and money.
              </p>
              <Link
                to="/services/paintless-dent-repair"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-blue-100 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Panel Replacement</h2>
              <p className="text-gray-700 mb-4">
                If your vehicle's panels have been damaged beyond repair, our
                panel replacement service is here to help. We'll remove the
                damaged panels and replace them with brand new ones, ensuring a
                seamless fit and finish that looks like it came straight from
                the factory.
              </p>
              <Link
                to="/services/panel-replacement"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-blue-100 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Frame Repair</h2>
              <p className="text-gray-700 mb-4">
                Our frame repair service is designed to restore your vehicle's
                structural integrity after a collision. Using state-of-the-art
                equipment and advanced repair techniques, our skilled
                technicians can straighten and reinforce your vehicle's frame,
                ensuring it meets factory specifications and is safe to drive.
              </p>
              <Link
                to="/services/frame-repair"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-blue-100 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                Additional Services
              </h2>
              <p className="text-gray-700 mb-4">
                In addition to our core services, we also offer a range of
                additional services to meet all of your automotive repair and
                maintenance needs. From wheel alignment and tire rotation to
                interior detailing and windshield replacement, we've got you
                covered.
              </p>
              <Link
                to="/services/additional-services"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
