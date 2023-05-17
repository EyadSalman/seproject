import Service1 from '../assets/tires.png';
import Service2 from '../assets/spare-parts.png';

const Services = ({ services }) => {
  return (
    <div className="services-section">
        <h2 className="section-heading">WE PROVIDE GREAT SERVICES FOR YOUR VEHICLE</h2>
        <div className="services-container">
          {services && services.map((service, idx) => (
            <div className="service-card" key={service._id}>
              {
                idx % 2 === 0 
                ? <img src={Service1} alt="Service 1" className="service-icon" />
                : <img src={Service2} alt="Service 2" className="service-icon" />
              }              
              <p className="service-title">{service.name}</p>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Services;