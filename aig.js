const intros = ['Hello.','Good day.'];
const apologies = ['We are sorry.','We apologize.'];

const intro = intros[Math.floor(Math.random() * (intros.length))];
const apology = apologies[Math.floor(Math.random() * (apologies.length))];

console.log(intro, apology);

exports.intro = intro;
exports.apology = apology;