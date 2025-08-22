import React from "react";

const ServiceDetailModal = ({ service, onClose, onBook }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-2">{service.name}</h2>
        <p className="text-gray-700">Price: ₹{service.price}</p>
        <p className="text-gray-700">Rating: ⭐ {service.rating}</p>
        <p className="text-gray-700">Availability: {service.availability}</p>
        <p className="mt-2 text-gray-600">This service is perfect for your events and celebrations.</p>

        <div className="mt-4 flex justify-between">
          <button 
            className="bg-gray-400 text-white px-3 py-1 rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
          <button 
            className="bg-green-500 text-white px-3 py-1 rounded-lg"
            onClick={() => onBook(service)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
