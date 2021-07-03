const intros     = ['Hello.','Good day.'];
const apologies  = ['We are sorry.','We apologize.'];
const closings   = ['It will take generations to address.','Change will not happen over night.']

const intro = intros[Math.floor(Math.random() * (intros.length))];
const apology = apologies[Math.floor(Math.random() * (apologies.length))];
const closing = closings[Math.floor(Math.random() * (closings.length))];

console.log(intro, apology, closing);

exports.intro = intro;
exports.apology = apology;
exports.closing = closing;