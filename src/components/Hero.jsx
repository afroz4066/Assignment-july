import React from "react";

const Hero = () => {
  return (
    <div className="bg-white  p-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-blue-500">
            Medi
            <span className="text-3xl font-bold text-orange-500">Care+</span>
          </h1>
          <ul className="flex space-x-6">
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
        <div className="flex">
          <div className="w-1/2 pr-8">
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
            <div className="flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Make an Appointment
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full">
                Departments
              </button>
            </div>
          </div>
          <div className="w-1/2 h-96 bg-gray-100 rounded-lg p-6">
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
