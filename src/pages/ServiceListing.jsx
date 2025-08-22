import { useContext } from "react";
import { ServiceContext } from "../context/ServiceContext";
import ServiceCard from "./components/ServiceCard";
import ServiceDetailModal from "../components/ServiceDetailModal";

const ServiceListing = () => {
  const { services } = useContext(ServiceContext);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
      <ServiceDetailModal />
    </div>
  );
};

export default ServiceListing;
