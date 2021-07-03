const apology = require('./aig.js');


test('Simple apology', () => {
  const apologies = ['We are sorry.', 'We apologize.']
  expect(apologies).toContain(apology);
});