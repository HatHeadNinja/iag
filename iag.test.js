const {intro, apology, closing} = require('./aig.js');

const intros    = ['Hello.','Good day.'];
const apologies = ['We are sorry.', 'We apologize.'];
const closings   = ['Take generations to address.','Not solved quickly.']

test('Random intro', () => expect(intros).toContain(intro));

test('Random apologies', () => expect(apologies).toContain(apology));

test('Random closings', () => expect(closings).toContain(closing));