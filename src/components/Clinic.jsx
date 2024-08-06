import React from "react";
import ambulance from "../Asests/ambulance.png";
import care from "../Asests/care.png";
import doctor from "../Asests/doctor.png";
const Clinic = () => {
  return (
    <div className=" bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="flex gap-10">
        <div className="max-w-3xl text-center mt-40">
          <h2 className="text-2xl font-bold tracking-tight text-[#003B79] sm:text-4xl">
            Clinic With Innovative
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            We provide the most full medical services, so every person could
            heave the oppurtunity to receive qualitative medical help.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="inline-block px-6 py-3 text-white font-medium text-sm leading-tight uppercase rounded-3xl shadow-md  bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="mt-10 relative">
          <div className="bg-white shadow-lg rounded-lg px-4 py-6 text-center">
            <div className="flex justify-center relative top-[-50px]">
              <img src={doctor} alt="Doctor" className="w-24 h-24" />
            </div>

            <h3 className="mt-4 text-xl font-medium text-gray-900">
              Qualified Doctors
            </h3>
          </div>

          <div className="bg-white shadow-lg rounded-lg px-4 py-6 text-center  relative left-80">
            <div className="flex justify-center relative top-[-50px]">
              <img src={care} className="w-24 h-24" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">
              Emergency Care
            </h3>
          </div>
          <div className="bg-white shadow-lg rounded-lg px-4 py-6 text-center">
            <div className="flex justify-center relative top-[-50px]">
              <img src={ambulance} alt="Ambulance" className=" w-24 h-24" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">
              24 Hours Service
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinic;
