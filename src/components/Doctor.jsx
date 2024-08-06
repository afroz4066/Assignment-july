import React, { useState } from "react";

const data = [
  {
    title: "Dr. Awaatif Al",
    description: "Dental Care",
    image: "#",
  },
  {
    title: "Dr. Filipa Gaspar",
    description: "Cardiology",
    image: "#",
  },
  {
    title: "Dr. Sukhmeet Gorae",
    description: "Neurological",
    image: "#",
  },
  {
    title: "Dr. Siri Jakobsson",
    description: "Prediatrics",
    image: "#",
  },
];

const Doctor = () => {
  const [currentData, setCurrentData] = useState(data[0]);

  const handleClick = (item) => {
    setCurrentData(item);
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4 text-[#003B79] md:text-4xl">
        We Have The Best Specialist
      </h1>
      <p className="text-gray-600 mb-8 md:text-lg">
        We have a wide experience in experience design and strategy, with
        locally-rooted knowledge.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <div
            key={item.title}
            onClick={() => handleClick(item)}
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover mx-auto mb-4 bg-[#AED3E2] rounded-lg"
            />
            <h2 className="text-lg font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
