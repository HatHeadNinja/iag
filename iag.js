const intros       = require('./data/intros.json');
const apologies    = require('./data/apologies.json');
const expectations = require('./data/expectations.json');
const closings     = require('./data/closings.json');

const randomIndex = (a) => Math.floor(Math.random() * (a.length));

const intro       = intros[randomIndex(intros)];
const apology     = apologies[randomIndex(apologies)];
const expectation = expectations[randomIndex(expectations)];
const closing     = closings[randomIndex(closings)];
const statement   = intro + ' ' 
                    + apology + ' '
                    + expectation + ' '
                    + closing;

console.log(statement);

exports.intro = intro;
exports.apology = apology;
exports.expectation = expectation;
exports.closing = closing;
exports.statement = statement;