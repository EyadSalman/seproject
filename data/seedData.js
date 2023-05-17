const mongoose = require('mongoose');
const data = require('../data/data');
const Car = require('../models/car');

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://ramzyraz:test1234@autoworkshop.o3pgv7h.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function insertData() {
  try {
    // Save the array of worker documents to the database
    const response = await Car.insertMany(data.cars);
    console.log('Data inserted successfully:', response);
  } catch (error) {
    console.error(error);
  } finally {
    // Disconnect from the database after saving the documents
    mongoose.disconnect();
  }
}

insertData();
