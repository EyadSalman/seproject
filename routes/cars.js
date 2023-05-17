const express = require('express');
const router = express.Router();
const Car = require('../models/car');

// Get all cars
router.get('/', async (req, res) => {
    try {
      const cars = await Car.find();
      res.status(200).json(cars);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
