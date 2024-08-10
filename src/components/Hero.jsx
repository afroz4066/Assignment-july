import React, { useState } from "react";

const Hero = () => {
  return (
    <div className="bg-white p-10">
      <div className="container mx-auto px-6">
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
