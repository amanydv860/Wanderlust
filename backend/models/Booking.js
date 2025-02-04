const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  listingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing',
    required: true,
  },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  numberOfGuests: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  listingName: String, // Add this field
  listingLocation: String, // Add this field
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
