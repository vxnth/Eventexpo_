import React, { useState } from "react";
import "./App.css";

function ServiceCard({ name, price, onView }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={() => onView(name)}>View Details</button>
    </div>
  );
}

function Modal({ service, onClose }) {
  if (!service) return null; 

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{service}</h2>
        <p>Book this service for your event.</p>
        <button className="book-btn">Book Now</button>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { name: "DJ Service", price: 200 },
    { name: "Photography", price: 300 },
    { name: "Catering", price: 500 },
  ];

  return (
    <div>
      <header>
        <h1>Event Booking Services</h1>
      </header>

      <div className="container">
        {services.map((s, index) => (
          <ServiceCard
            key={index}
            name={s.name}
            price={s.price}
            onView={setSelectedService}
          />
        ))}
      </div>

      <Modal service={selectedService} onClose={() => setSelectedService(null)} />
    </div>
  );
}
