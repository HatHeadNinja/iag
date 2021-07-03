const apology = require('./aig.js');

const apologies = ['We are sorry.', 'We apologize.']

test('Simple apology', () => {
  expect(apologies).toContain(apology);
});