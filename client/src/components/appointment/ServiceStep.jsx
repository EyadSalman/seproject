const ServicesPage = ({ services, selectedServices, handleServiceSelect, handleNextStep }) => {
  return (
    <>
      <h3>Step 1: Select Services</h3>
      <ul className="service-list">
        {services && services.map((service) => (
          <li className={`service-item ${selectedServices.some((s) => s._id === service._id) ? 'selected-service' : ''}`} key={service._id}>
            <div className='service-content'>
              <div>
                <h3 className="service-name">{service.name}</h3>
                <p className="service-description">{service.description}</p>
                <p className="service-price">Price: ${service.price}</p>
              </div>
              <input
                type="checkbox"
                checked={selectedServices.some((s) => s._id === service._id)}
                onChange={() => handleServiceSelect(service)}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className='next-button-pos'>
        <button onClick={handleNextStep} className='next-button'>Next</button>
      </div>
    </>
  );
};

export default ServicesPage;
