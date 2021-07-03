const intros     = ['Hello.','Good day.'];
const apologies  = ['We are sorry.','We apologize.'];
const closings = ['We look forward to working with our Indigenous partners','Together, we can overcome colonial structures and institutions.']

const intro = intros[Math.floor(Math.random() * (intros.length))];
const apology = apologies[Math.floor(Math.random() * (apologies.length))];
const closing = closings[Math.floor(Math.random() * (closings.length))];

console.log(intro, apology, closing);

exports.intro = intro;
exports.apology = apology;
exports.closing = closing;