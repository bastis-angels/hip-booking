const express = require('express');
const app = express();
const port = 3000;
const Listing = require('../db/Listing.js');

app.use(express.static('public'));

app.get('/listing/:listingId', (req, res) => {
  Listing.find({listingId: req.params.listingId}, (err, listings) => {
    if (err) {
      console.log('Error: ' + err);
    } else {
      res.send(listings[0]);
    }
  })
});

app.get('/listing/:listingId/booked', (req, res) => {
  Listing.find({listingId: req.params.listingId}, (err, listings) => {
    if (err) {
      console.log('Error: ' + err);
    } else {
      res.send(listings[0].bookedDates);
    }
  })
})

app.listen(port, () => console.log(`Listening on port ${port}...`));
