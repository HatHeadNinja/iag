const intros        = ['Hello.','Good day.'];
const apologies     = ['We are sorry.','We apologize.'];
const expectations  = ['It will take generations to address.','Reconciliation takes time.']
const closings      = ['We look forward to working with our Indigenous partners.','Together, we can overcome colonial structures and institutions.']

exports.intro       = intros[Math.floor(Math.random() * (intros.length))];
exports.apology     = apologies[Math.floor(Math.random() * (apologies.length))];
exports.expectation = expectations[Math.floor(Math.random() * (expectations.length))];
exports.closing     = closings[Math.floor(Math.random() * (closings.length))];