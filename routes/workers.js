const express = require('express');
const router = express.Router();
const Worker = require('../models/workers');

// Get all Workers
router.get('/', async (req, res) => {
    try {
      const workers = await Worker.find();
      res.json(workers);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
