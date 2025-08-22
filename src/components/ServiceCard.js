import React from "react";

const ServiceCard = ({ service, onSelect, onBook }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 text-center">
      <h2 className="text-xl font-semibold">{service.name}</h2>
      <p className="text-gray-600">Price: ₹{service.price}</p>
      <p className="text-gray-600">Rating: ⭐ {service.rating}</p>
      <p className="text-gray-600">Availability: {service.availability}</p>

      <div className="mt-4 flex justify-center gap-3">
        <button 
          className="bg-blue-500 text-white px-3 py-1 rounded-lg"
          onClick={() => onSelect(service)}
        >
          Details
        </button>
        <button 
          className="bg-green-500 text-white px-3 py-1 rounded-lg"
          onClick={() => onBook(service)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
