const apology = require('./aig.js');

test('Simple apology', () => {
  expect(apology).toBe('We are sorry.');
});