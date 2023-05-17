import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import Services from '../components/appointment/ServiceStep';
import DateTime from '../components/appointment/DateTime';
import Workers from '../components/appointment/WorkerStep';
import axios from 'axios';

const MakeAppointment = ({ customer, services, workers }) => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedWorkers, setSelectedWorkers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleServiceSelect = (service) => {
    const serviceIndex = selectedServices.findIndex((s) => s._id === service._id);

    if (serviceIndex > -1) {
      setSelectedServices((prevServices) => prevServices.filter((s) => s._id !== service._id));
    } else {
      setSelectedServices((prevServices) => [...prevServices, service]);
    }
  };

  const handleWorkerSelect = (worker) => {
    const workerIndex = selectedWorkers.findIndex((w) => w._id === worker._id);

    if (workerIndex > -1) {
      setSelectedWorkers((prevWorkers) => prevWorkers.filter((w) => w._id !== worker._id));
    } else {
      setSelectedWorkers((prevWorkers) => [...prevWorkers, worker]);
    }
  };

  const handleBooking = async () => {
    if (!selectedDate || 
      !selectedTime || 
      selectedWorkers.length === 0 || 
      selectedServices.length === 0
    ) {
      setError('Please select a date, time, and at least one worker or service.');
      return;
    }
    try {  
      const totalPrice = selectedServices.reduce((total, service) => total + service.price, 0);
      await axios.post('http://localhost:5000/appointment', {
        customer,
        selectedServices,
        selectedWorkers,
        selectedDate,
        selectedTime,
        totalPrice
      });
  
      setSelectedServices([]);
      setSelectedWorkers([]);
      setSelectedDate('');
      setSelectedTime('');
      setError(null);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      navigate('/appointment');
    } catch (error) {
      setError('Failed to book appointment. Please try again later.');
      console.error(error);
    }
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <Services 
        services={services} 
        selectedServices={selectedServices} 
        handleServiceSelect={handleServiceSelect} 
        handleNextStep={handleNextStep} 
      />
      case 2:
        return <DateTime 
          selectedDate={selectedDate} 
          setSelectedDate={setSelectedDate} 
          selectedTime={selectedTime} 
          setSelectedTime={setSelectedTime} 
          handlePreviousStep={handlePreviousStep} 
          handleNextStep={handleNextStep} 
        />
      case 3:
        return <Workers 
          workers={workers}
          selectedServices={selectedServices}
          selectedWorkers={selectedWorkers}
          selectedDate={selectedDate} 
          selectedTime={selectedTime} 
          handleWorkerSelect={handleWorkerSelect} 
          handlePreviousStep={handlePreviousStep} 
          handleBooking={handleBooking} 
        />
      default:
        return null;
    }
  };

  return (
    <div className="appointment-page">
      <h2>Book Appointment</h2>
      {renderStepContent()}
      {error && <p className='error'>{error}</p>}
    </div>
  );
};

export default MakeAppointment;
