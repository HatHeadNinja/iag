const intros = ['Hello.','Good day.'];
const apologies = ['We are sorry.','We apologize.'];

const introIndex = Math.floor(Math.random() * (intros.length));
const apologyIndex = Math.floor(Math.random() * (apologies.length));

const intro = intros[introIndex];
apology = apologies[apologyIndex];
console.log(intro, apology);

exports.intro = intro;
exports.apology = apology;