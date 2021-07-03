const intro     = require('./aig.js');
const apology   = require('./aig.js');

const intros    = ['Hello.','Good day.'];
const apologies = ['We are sorry.', 'We apologize.'];

test('Simple intro', () => expect(intros).toContain(intro));

test('Random apologies', () => expect(apologies).toContain(apology));