const generate = require('nanoid/generate');
const numbers = require('nanoid-dictionary/numbers');

module.exports = generate.bind(null, numbers);