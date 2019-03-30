const express = require('express');
const app = express();
const port = 3000;
const Listing = require('../db/Listing.js');

app.use(express.static('public'));

app.get('/listing/:listingId', (req, res) => {
  // returns object containing base price, additional occupancy fee, cleaning free, host name, and min/max guests
  res.end();
});

app.get('/listing/:listingId/booked', (req, res) => {
  // returns array of dates that are booked/unavailable
  Listing.find({listingId: req.params.listingId}, (err, listings) => {
    if (err) console.log(err);
    res.send(listings);
  })
})

app.listen(port, () => console.log(`Listening on port ${port}...`));
