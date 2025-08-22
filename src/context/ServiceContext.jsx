import { createContext, useState, useEffect } from "react";

export const ServiceContext = createContext();

const mockServices = [
  { id: 1, name: "DJ Night", price: 5000, rating: 4.5, category: "DJ", location: "Chennai", available: true, images: ["/dj1.jpg", "/dj2.jpg"] },
  { id: 2, name: "Wedding Photographer", price: 8000, rating: 4.7, category: "Photographer", location: "Bangalore", available: false, images: ["/photo1.jpg", "/photo2.jpg"] },
  { id: 3, name: "Catering Service", price: 10000, rating: 4.2, category: "Caterer", location: "Hyderabad", available: true, images: ["/cat1.jpg", "/cat2.jpg"] },
];

export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    // Mock API call
    setTimeout(() => setServices(mockServices), 1000);
  }, []);

  return (
    <ServiceContext.Provider value={{ services, selectedService, setSelectedService }}>
      {children}
    </ServiceContext.Provider>
  );
};
