const apology = require('./aig.js');

const apologies = ['We are sorry.', 'We apologize.']

test('Random apologies', () => {
  expect(apologies).toContain(apology);
});