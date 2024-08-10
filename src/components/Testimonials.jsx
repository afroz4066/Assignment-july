import React, { useEffect, useState } from "react";
import axios from "axios";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      .then((response) => {
        const reviews = response.data.data; // Adjust based on the actual API response structure
        setTestimonials(reviews);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the testimonials:", error);
      });
  }, []);

  return (
    <div className="text-[#003B79] py-12">
      <h2 className="text-center text-3xl font-bold mb-8">
        What Our Customers Say
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md w-80 hover:bg-black hover:text-white transition-colors duration-1000 ease-in-out transform ">
      <div className="absolute top-[-15px] right-[-20px] mt-4 ml-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
        &ldquo;
      </div>
      <p
        className={`text-gray-700 mb-4 ${
          showFullText ? "" : "h-16 overflow-hidden"
        }`}
      >
        "{testimonial.Reviews}"
      </p>
      {!showFullText && (
        <button
          className="text-blue-500 flex items-center"
          onClick={toggleText}
        >
          <span>Read more</span>
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      )}
      {showFullText && (
        <button
          className="text-blue-500 flex items-center"
          onClick={toggleText}
        >
          <span>Show less</span>
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            ></path>
          </svg>
        </button>
      )}
      <div className="flex items-center mt-4">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={testimonial.image_url}
          alt={testimonial.Name}
        />
        <div>
          <p className="font-bold">{testimonial.Name}</p>
          <p className="text-sm text-gray-600">{testimonial.Platform}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
