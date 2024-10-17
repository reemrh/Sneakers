import { services } from "../constants";
import ServiceCard from "../Components/ServiceCard";
const Services = () => {
  return (
    <section className="max-container gap-8 flex justify-center flex-wrap ">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
