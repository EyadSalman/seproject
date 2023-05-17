const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');
const bcrypt = require('bcrypt');

// Create new customer
router.post('/signup', async (req, res) => {
    try {
      // Extract request data
      const { name, email, password, car } = req.body;
  
      // Check if the email is already registered
      const existingCustomer = await Customer.findOne({ email });
      if (existingCustomer) {
        return res.status(400).json({ message: 'Email already registered' });
      }
  
      // Create new customer
      const newCustomer = new Customer({
        name,
        email,
        password,
        car,
      });
  
      // Save the new customer
      await newCustomer.save();
  
      res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
});

// Login customer
router.post('/login', async (req, res) => {
    try {
      // Extract request data
      const { email, password } = req.body;
  
      // Find the customer by email
      const customer = await Customer.findOne({ email });
      if (!customer) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Compare the passwords
      const isPasswordValid = await bcrypt.compare(password, customer.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      res.status(200).json({ message: 'Login successful', body: customer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
});

// Get all customers
router.get('/', async (req, res) => {
    try {
      const customers = await Customer.find();
      res.status(200).json(customers);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;