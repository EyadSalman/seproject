import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cars');
        if (response && response.status === 200) {
            setCars(response.data);
        } else {
            console.log(response);
        }
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="services-section">
        <h2 className="section-heading">CARS</h2>
        <div className="services-container">
          {cars && cars.map((car, idx) => (
            <div className="service-card" key={car._id}>            
              <p className="service-title">{car.make}</p>
              <p className="service-description">{car.model}</p>
              <p className="service-price">{car.year}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Cars;