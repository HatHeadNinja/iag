const apology = require('./aig.js');


test('Simple apology', () => {
  const apologies = 'We are sorry.'
  expect(apology).toEqual(apologies);
});