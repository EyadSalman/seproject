const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  specialization: [{ type: String, required: true }],
  appointmentSlots: [{
    date: { type: Date, required: true },
    time: { type: String, required: true }
  }],
});

module.exports = mongoose.model('Worker', workerSchema);
