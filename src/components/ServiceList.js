import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  { id: 1, name: "DJ Services", price: 5000, rating: 4.5, availability: "Available" },
  { id: 2, name: "Wedding Photographer", price: 10000, rating: 4.8, availability: "Available" },
  { id: 3, name: "Catering", price: 20000, rating: 4.2, availability: "Limited" }
];

const ServiceList = ({ onSelect, onBook }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard 
          key={service.id} 
          service={service} 
          onSelect={onSelect}
          onBook={onBook}
        />
      ))}
    </div>
  );
};

export default ServiceList;
