import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import Logo from '../assets/logo3.png';
import '../App.css';

const Navbar = ({ customer, setCustomer }) => {
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    setCustomer(null);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="Logo" className="logo-image" />
          <span className="navbar-name">TurboTech</span>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/appointment" className="navbar-link">Appointment</Link>
        {
          !customer ? (
            <>
              <Link to="/login" className="navbar-link">Login</Link>
              <Link to="/signup" className="navbar-link">Signup</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="navbar-link-logout">Logout</button>
          )
        }        
      </div>
    </nav>
  );
};

export default Navbar;
