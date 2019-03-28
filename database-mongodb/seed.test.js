const sampleListings = require('./seed.js');

test('sampleListings length to equal 100', () => {
  expect(sampleListings.length).toBe(100);
});