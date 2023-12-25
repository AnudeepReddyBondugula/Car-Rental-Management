const mongoose = require('mongoose');

const rentalRequestSchema = new mongoose.Schema({
  requester_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the Users collection for the requester
    required: true
  },
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the Users collection for the car owner
    required: true
  },
  car_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car', // Reference to the Cars collection
    required: true
  },
  request_date: {
    type: Date,
    default: Date.now
  },
  desired_pickup_date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
});

const RentalRequest = mongoose.model('RentalRequest', rentalRequestSchema);

module.exports = RentalRequest;
