const db = require('./index.js');
const Listing = require('./Listing.js');

const sampleListings = [];

const insertSampleListings = function() {
  Listing.create(sampleListings)
    .then(() => db.disconnect());
};

// insertSampleListings();

module.exports = sampleListings;