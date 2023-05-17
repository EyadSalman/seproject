const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');

// Get all appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Post an appointment
router.post('/', async (req, res) => {
  try {
    const { customer, selectedServices, selectedWorkers, selectedDate, selectedTime, totalPrice } = req.body;

    if (!customer || !selectedServices || !Array.isArray(selectedServices) || selectedServices.length === 0) {
      return res.status(400).json({ message: 'Invalid customer ID or services' });
    }

    if (!selectedWorkers || !Array.isArray(selectedWorkers) || selectedWorkers.length === 0) {
      return res.status(400).json({ message: 'Invalid workers' });
    }

    if (!selectedDate || !selectedTime) {
      return res.status(400).json({ message: 'Invalid appointment date or time' });
    }

    const appointment = new Appointment({
      customer,
      services: selectedServices,
      workers: selectedWorkers,
      date: selectedDate,
      time: selectedTime,
      price: totalPrice
    });

    await appointment.save();
    res.status(201).json({ message: 'Appointment created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create appointment' });
  }
});

module.exports = router;
