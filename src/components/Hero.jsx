import React, { useState } from "react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white p-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-blue-500">
            Medi
            <span className="text-3xl font-bold text-orange-500">Care+</span>
          </h1>
          <div className="flex items-center space-x-6 lg:space-x-6">
            <ul className="hidden lg:flex space-x-6">
              <li className="hover:text-blue-500">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-blue-500">
                <a href="#">About</a>
              </li>
              <li className="hover:text-blue-500">
                <a href="#">Services</a>
              </li>
              <li className="hover:text-blue-500">
                <a href="#">News</a>
              </li>
              <li>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Contact
                </button>
              </li>
            </ul>
            <button
              className="lg:hidden text-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-50 p-6 transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <button
              className="text-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="mt-12 space-y-4">
            <li className="hover:text-blue-500">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="#">About</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="#">Services</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="#">News</a>
            </li>
            <li>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-4xl font-bold mb-4">
              Welcome to MediCare+ Clinic
            </h2>
            <h3 className="text-5xl font-bold mb-6 text-[#003B79]">
              Best Specialists
            </h3>
            <p className="text-lg mb-8">
              We are on the leading edge of cancer care. Providing the full
              continuum of cancer treatments and supportive care services in a
              single convenient location.
            </p>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Make an Appointment
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full">
                Departments
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:h-96 bg-gray-100 rounded-lg p-6 mt-6 lg:mt-0">
            <img
              src="https://wallpapers.com/images/hd/modern-hospital-building-illustration-n7pd9krca2gr8qda.png"
              alt="landing images"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
