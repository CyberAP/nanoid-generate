const generate = require('nanoid/generate');
const uppercase = require('nanoid-dictionary/uppercase');

module.exports = generate.bind(null, uppercase);