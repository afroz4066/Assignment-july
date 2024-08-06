import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email:", email);
  };

  return (
    <div className="p-28">
      <div className="bg-blue-500 p-8 rounded-lg shadow-md h-80">
        <h2 className="text-white text-2xl font-bold mb-4 text-center">
          Subscribe to Newsletter
        </h2>
        <p className="text-white mb-6 text-center">
          We have a wide experience in experience design and strategy.
        </p>
        <form onSubmit={handleSubmit} className="relative flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full h-24 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 pr-32"
          />
          <button
            type="submit"
            className=" bg-blue-500 absolute right-2 top-6 h-12 w-24 rounded-3xl  text-white font-medium"
          >
            Send Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
