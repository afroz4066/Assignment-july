import React from "react";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-12 p-6">
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
        </ul>
      </div>
      <div className="flex   items-center p-6 space-x-4 bg-slate-100">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF
            className="text-blue-600 hover:text-blue-800"
            size={24}
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-400 hover:text-blue-600" size={24} />
        </a>
        <a href="mailto:example@gmail.com">
          <FaGoogle className="text-red-500 hover:text-red-700" size={24} />
        </a>
      </div>
    </>
  );
};

export default Footer;
