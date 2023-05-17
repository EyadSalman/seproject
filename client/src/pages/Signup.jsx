import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cars, setCars] = useState([]);
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [section, setSection] = useState(1);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handlePreviousSection = (e) => {
    e.preventDefault();
    setSection(section - 1);
  };

  const handleNextSection = async (e) => {
    e.preventDefault();
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    } 
    
    setError('');

    try {
      const response = await axios.get('http://localhost:5000/cars');
      if (response && response.status === 200) {
        setCars(response.data);
      } else {
        console.log(response.error);
      }
    } catch (error) {
      console.log("Error fetching data: ", error);
    }

    setSection(section + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Find the selected car object in the locally stored car data
    console.log(cars);
    console.log(carMake, carModel, carYear);
    const car = cars.find((car) => car.make === carMake && car.model === carModel && car.year.toString() === carYear);

    if (!car) {
      // Handle error if car data couldn't be found
      setError('Selected car data not found');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/customers/signup', { name, email, password, car });
      if (response.status === 201) {
        navigate.push('/login');
      } else {
        setError(response.data.message);
      }
    } catch(error) {
      setError('An error occurred. Please try again.');
    }
  }

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Create an Account</h2>

      {section === 1 && (
        <form onSubmit={handleNextSection} className="signup-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
          {error && <p className='error'>{error}</p>}
          <button type="submit" className='next-button'>Next</button>
        </form>
      )}

      {section === 2 && (
        <form onSubmit={handleSubmit} className="signup-form">
          <select value={carMake} onChange={(e) => setCarMake(e.target.value)} required>
            <option value="">Select Car Make</option>
            {Array.from(new Set(cars.map((car) => car.make))).map((make) => (
              <option value={make} key={make}>{make}</option>
            ))}
          </select>
          <select value={carModel} onChange={(e) => setCarModel(e.target.value)} required>
            <option value="">Select Car Model</option>
            {cars
              .filter((car) => car.make === carMake)
              .map((car, idx) => (
                <option value={car.model} key={car.model + idx}>{car.model}</option>
              ))}
          </select>
          <select value={carYear} onChange={(e) => setCarYear(e.target.value)} required>
            <option value="">Select Car Year</option>
            {
              cars
              .filter((car) => car.make === carMake && car.model === carModel)
              .map((car, idx) => <option value={car.year} key={car.year + idx}>{car.year}</option>)
            }
          </select>
          {error && <p className='error'>{error}</p>}
          <div className='buttons-pos'>
            <button type="button" onClick={handlePreviousSection} className='next-button'>Previous</button>
            <button type="submit" className='next-button'>Signup</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignUpPage;