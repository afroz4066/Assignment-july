import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactUsForm from "./Contact";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false); // Add state for contact form visibility

  const toggleContactForm = () => {
    setIsContactFormOpen(!isContactFormOpen);
  };

  return (
    <div className="sticky top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className=" header flex justify-between items-center">
          <Link to="/" className="logo">
            <h1 className="text-3xl font-bold text-blue-500">
              Medi
              <span className="text-3xl font-bold text-orange-500">Care+</span>
            </h1>
          </Link>
          <div className=" flex gap-9 ">
            <div className="flex items-center space-x-6 lg:space-x-6">
              <ul className="hidden lg:flex space-x-6 text-base">
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
            <div className="hidden lg:block">
              <button
                className=" contact-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={toggleContactForm} // Toggle contact form
              >
                Contact
              </button>
            </div>
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
            <li>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={toggleContactForm} // Toggle contact form
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        {isContactFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <div className="flex justify-end">
                <button className="text-blue-500" onClick={toggleContactForm}>
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
              <ContactUsForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
