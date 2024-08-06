import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email:", email);
  };

  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-20">
      <div className="bg-blue-500 p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-md h-80">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
          Subscribe to Newsletter
        </h2>
        <p className="text-white mb-4 sm:mb-6 text-center text-sm sm:text-base">
          We have a wide experience in experience design and strategy.
        </p>
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col lg:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full h-12 sm:h-24 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 pr-32 mb-4 lg:mb-0 lg:flex-1"
          />
          <button
            type="submit"
            className="bg-blue-500 h-12 w-full sm:w-28  rounded-3xl text-white font-medium lg:absolute lg:right-2 lg:top-6"
          >
            Send Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
