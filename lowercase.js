const generate = require('nanoid/generate');
const lowercase = require('nanoid-dictionary/lowercase');

module.exports = generate.bind(null, lowercase);