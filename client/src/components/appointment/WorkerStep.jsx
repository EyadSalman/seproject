import { useState, useEffect } from "react";

const Workers = (props) => {
  const [filteredWorkers, setFilteredWorkers] = useState([]);
  const { 
    selectedDate, 
    selectedTime, 
    workers, 
    selectedServices, 
    selectedWorkers, 
    handleWorkerSelect, 
    handlePreviousStep, 
    handleBooking 
} = props;
  
useEffect(() => {
  const filteredWorkers = workers && workers.filter((worker) => {
    const hasClash = worker.appointmentSlots.some((slot) => slot.date === selectedDate && slot.time === selectedTime);
    const hasSelectedSpecialization = selectedServices.some((service) => worker.specialization.includes(service.name));
    return (
      hasSelectedSpecialization && 
      worker.appointmentSlots.length === 0 && 
      !hasClash
    );
  });

  setFilteredWorkers(filteredWorkers);
}, [selectedServices, workers, selectedDate, selectedTime]);

  return (
    <div>
      <h3>Step 3: Select Available Workers</h3>
      <ul className="service-list">
        {filteredWorkers && filteredWorkers.map((worker) => (
          <li className={`service-item ${selectedWorkers.some((s) => s._id === worker._id) ? 'selected-service' : ''}`} key={worker._id}>
            <div className='service-content'>
              <div>
                <h3 className="service-name">{worker.name}</h3>
                <p className="service-description">{worker.specialization}</p>
                <p className="service-price">{worker.email}</p>
              </div>
              <input
                type="checkbox"
                checked={selectedWorkers.some((s) => s._id === worker._id)}
                onChange={() => handleWorkerSelect(worker)}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className='buttons-pos'>
        <button onClick={handlePreviousStep} className='next-button'>Previous</button>
        <button onClick={handleBooking} className='next-button'>Book Appointment</button>
      </div>
    </div>
  );
}
 
export default Workers;