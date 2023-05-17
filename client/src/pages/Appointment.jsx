import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AppointmentsPage = ({ customer }) => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/appointment');
        console.log(response)
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="appointments-page">
      <h1 className="page-title">Appointments</h1>
      {customer && appointments && appointments.length > 0 ? (
        <ul className="appointment-list">
          {appointments && appointments.map((appointment) => (
            <li key={appointment._id} className="appointment-item">
              <h2 className="appointment-name">{customer.name}</h2>
              <p className="appointment-price">{appointment.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-appointments">No appointments found.</p>
      )}

      {
        customer ? (
          <button className="appointment-button" onClick={() => navigate('/makeAppointment')}>Make Appointment</button>
        ) : (
          <p className="no-appointments">Login to make appointments.</p>
        )
      }
    </div>
  );
};

export default AppointmentsPage;
