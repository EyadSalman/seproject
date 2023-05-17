require('dotenv').config()
const cors = require('cors');
const morgan = require("morgan");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Import routes
const customerRoutes = require('./routes/customers');
const servicesRoutes = require('./routes/services');
const appointmentRoutes = require('./routes/appointment');
const workerRoutes = require('./routes/workers');
const carRoutes = require('./routes/cars');

// Set up middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin: 'http://localhost:3000'})); 

// Connect to MongoDB database
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Define API routes
app.get('/', (req, res) => res.send('Auto Workshop API'));
app.use('/customers', customerRoutes);
app.use('/services', servicesRoutes);
app.use('/appointment', appointmentRoutes);
app.use('/workers', workerRoutes);
app.use('/cars', carRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));