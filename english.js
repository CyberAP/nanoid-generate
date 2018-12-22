const generate = require('nanoid/generate');
const lowercase = require('nanoid-dictionary/lowercase');
const uppercase = require('nanoid-dictionary/uppercase');
const english = lowercase + uppercase;

module.exports = generate.bind(null, english);