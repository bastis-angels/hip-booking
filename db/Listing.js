const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const bookedYearSchema = new mongoose.Schema({
  Jan: Array,
  Feb: Array,
  Mar: Array,
  Apr: Array,
  May: Array,
  Jun: Array,
  Jul: Array,
  Aug: Array,
  Sep: Array,
  Oct: Array,
  Nov: Array,
  Dec: Array
});

const bookedDatesSchema = new mongoose.Schema({
  '2019': [bookedYearSchema],
  '2020': [bookedYearSchema],
  '2021': [bookedYearSchema],
  '2022': [bookedYearSchema]
});


const listingSchema = new mongoose.Schema({
  listingId: Number,
  host: String,
  bookedDates: bookedDatesSchema,
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

  