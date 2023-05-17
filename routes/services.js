const express = require('express');
const router = express.Router();
const Service = require('../models/services');

// Get all services
router.get('/', async (req, res) => {
    try {
      const services = await Service.find();
      res.status(200).json(services);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;