const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the Users collection
    required: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  license_plate: {
    type: String,
    required: true
  },
  vin: {
    type: String,
    required: true
  },
  current_condition: {
    type: String,
    required: true
  },
  availability_status: {
    type: String,
    enum: ['available', 'rented', 'maintenance'],
    required: true,
    default : 'available'
  },
  rental_rate: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: [{
    type: String, // Assuming storing image URLs
    required: true
  }],
  location: {
    type: String,
    required: true
  }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
