const {intro, apology, expectation, closing, statement} = require('./iag.js');

const intros       = ['Hello.','Good day.'];
const apologies    = ['We are sorry.', 'We apologize.'];
const expectations = ['It will take generations to address.','Reconciliation takes time.']
const closings     = ['We look forward to working with our Indigenous partners.','Together, we can overcome colonial structures and institutions.']

test('Random intro selected from intro array', () => expect(intros).toContain(intro));

test('Random apology selected from apologies array', () => expect(apologies).toContain(apology));

test('Random expectation selected from expectations array', () => expect(expectations).toContain(expectation));

test('Random closing selected from closings array', () => expect(closings).toContain(closing));

test('Statement returned anything', () => expect(statement).toEqual(expect.anything()));