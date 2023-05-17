const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  workers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Worker', required: true }],
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
