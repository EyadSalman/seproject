import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import MakeAppointment from './pages/MakeAppointment';
import './App.css';

const App = () => {
  const [customer, setCustomer] = useState(null);
  const [services, setServices] = useState([]);
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/services');
        if (response && response.status === 200) {
            setServices(response.data);
        } else {
            console.log(response);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    const fetchWorkers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/workers');
        if (response && response.status === 200) {
            setWorkers(response.data);
        } else {
            console.log(response);
        }
      } catch (error) {
        console.error('Error fetching workers:', error);
      }
    };

    fetchServices();
    fetchWorkers();
  }, []);

  return (
    <Router>
      <div className="app-container">
        <NavBar customer={customer} setCustomer={setCustomer} />
        <Routes>
          <Route path="/" element={<Home services={services} workers={workers} />} />
          <Route path="/appointment" element={<Appointment customer={customer} />} />
          <Route path="/makeAppointment" element={<MakeAppointment customer={customer} services={services} workers={workers} />} />
          <Route path="/login" element={<Login setCustomer={setCustomer} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
