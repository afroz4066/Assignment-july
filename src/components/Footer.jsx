import React, { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <footer className="p-6 bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4 md:mb-0">
          Medi
          <span className="text-2xl md:text-3xl font-bold text-orange-500">
            Care+
          </span>
        </h1>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <li className="hover:text-blue-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="#">News</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center md:justify-start items-center space-x-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF
            className="text-blue-600 hover:text-blue-800"
            size={20}
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-400 hover:text-blue-600" size={20} />
        </a>
        <a href="mailto:example@gmail.com">
          <FaGoogle className="text-red-500 hover:text-red-700" size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
