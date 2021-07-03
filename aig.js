const apologies = ['We are sorry.','We apologize.'];

const apologyIndex = Math.floor(Math.random() * (apologies.length));

apology = apologies[apologyIndex];
console.log(apology);

module.exports = apology;