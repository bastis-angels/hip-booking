// const db = require('./index.js');
const Listing = require('./Listing.js');

const sampleListings = [];

const firstNames = ['anna', 'becky', 'caitlin', 'dani', 'elizabeth', 'francesca', 'grace', 'hannah', 'jill'];
const lastNames = ['smith', 'bezos', 'quinn', 'jobs', 'gates', 'hathaway', 'hopper'];

for (let i = 0; i < 100; i++) {
  listing = new Listing({
    host: firstNames[Math.floor(firstNames.length * Math.random())] + lastNames[Math.floor(lastNames.length * Math.random())],
    booked: {},
    basePrice: 10 + 500 * Math.random(),
    occupancyFee: 30 * Math.random(),
    cleaningFee: 50 * Math.random()
  })
}

// listingSchema = new mongoose.Schema({
//   host: String,
//   booked: Object,
//   basePrice: Number,
//   occupancyFee: Number,
//   cleaningFee: Number,
// },

const insertSampleListings = function() {
  Listing.create(sampleListings)
    .then(() => db.disconnect());
};

// insertSampleListings();

module.exports = sampleListings;