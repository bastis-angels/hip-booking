const mongoose = require('mongoose');
const db = require('/index.js');
mongoose.Promise = global.Promise;

const listingSchema = new mongoose.Schema({
  host: String,
  booked: Object,
  basePrice: Number,
  occupancyFee: Number,
  cleaningFee: Number,
}, 
  {
    timestamps: true
  }
);

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;

//   Booked: {2019: {Jan: [days], Feb: [days], Mar: [days]...}},

  