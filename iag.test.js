const {intro, apology, expectation, closing} = require('./aig.js');

const intros       = ['Hello.','Good day.'];
const apologies    = ['We are sorry.', 'We apologize.'];
const expectations = ['It will take generations to address.','Reconciliation takes time.']
const closings     = ['We look forward to working with our Indigenous partners.','Together, we can overcome colonial structures and institutions.']

test('Random intro', () => expect(intros).toContain(intro));

test('Random apologies', () => expect(apologies).toContain(apology));

test('Random expectations', () => expect(expectations).toContain(expectation));

test('Random closings', () => expect(closings).toContain(closing));