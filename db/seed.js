const mongoose = require('mongoose');
const Listing = require('./Listing.js');
const faker = require('faker');

const sampleListings = [];

let genBookedDates = function() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let dates = {};
  
  for (let i = 0; i < 100; i++) {
    let date = faker.date.future(2)
    let year = date.getFullYear();
    let monthNumber = date.getMonth();
    let month = months[monthNumber];
    let day = date.getDate();

    if (object[year] === undefined) {
      object[year] = {};
      object[year][month] = [];
    } else if (object[year][month] === undefined) {
      object[year][month] = [];
    }
    if (object[year][month].indexOf(day) === -1) {
      object[year][month].push(day);
    }
  }
  return dates;
}

for (let i = 1; i <= 100; i++) {
  listing = new Listing({
    listingId: i,
    host: faker.name.findName(),
    bookedDates: genBookedDates(),
    basePrice: faker.random.number({min: 10, max: 500}),
    occupancyFee: faker.random.number({min: 0, max: 30}),
    cleaningFee: faker.random.number({min: 0, max: 50})
  })
  sampleListings.push(listing);
}

const insertSampleListings = function() {
  Listing.insertMany(sampleListings, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('disconnecting...');
    mongoose.connection.close();
  });
};

insertSampleListings();

module.exports = sampleListings;