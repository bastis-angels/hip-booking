const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/listing/:listingId', (req, res) => {
  // returns object containing base price, additional occupancy fee, cleaning free, host name, and min/max guests
  res.end();
});

app.get('/listing/:listingId/booked', (req, res) => {
  // returns array of dates that are booked/unavailable
  res.end();
})

app.listen(port, () => console.log(`Listening on port ${port}...`));
