const intros       = ['Hello.','Good day.'];
const apologies    = ['We are sorry.','We apologize.'];
const expectations = ['It will take generations to address.','Change will not happen over night.']
const closings     = ['We look forward to working with our Indigenous partners','Together, we can overcome colonial structures and institutions.']

const intro        = intros[Math.floor(Math.random() * (intros.length))];
const apology      = apologies[Math.floor(Math.random() * (apologies.length))];
const expectation  = expectations[Math.floor(Math.random() * (expectations.length))];
const closing      = closings[Math.floor(Math.random() * (closings.length))];

console.log(intro, apology, expectation, closing);

exports.intro = intro;
exports.apology = apology;
exports.expectation = expectation;
exports.closing = closing;