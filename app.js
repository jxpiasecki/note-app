const validator = require('validator');
const notes = require('./notes');
console.log(notes.getNotes());
console.log(validator.isEmail('aaaa@localhost'));
console.log(validator.isURL('wp.pl'));
console.log(validator.isURL('gówno.pl'));