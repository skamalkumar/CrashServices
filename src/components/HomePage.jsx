import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageCollage from "./ImageCollage";
import { Link } from "react-router-dom";

const HomePage = () => {
  const images = [
    "../../images/image1.jpg",
    "../../images/image2.jpg",
    "../../images/image3.jpg",
    "../../images/image4.jpg",
  ];

  return (
    <div>
      <Header />
      <div className="bg-gray-100">
        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Welcome to <span className="text-blue-500">Crash Services</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide expert crash repair services for all types of
                vehicles. Our team of skilled technicians ensures top-quality
                repairs using state-of-the-art equipment.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With years of experience in the industry, we guarantee customer
                satisfaction and peace of mind. Whether it's minor dents or
                major collision damage, we've got you covered.
              </p>
              <Link to="/services" className="text-blue-500 hover:underline">
                Learn More about Our Services
              </Link>
            </div>
            <div>
              <ImageCollage images={images} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
