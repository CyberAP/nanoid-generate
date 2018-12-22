const generate = require('nanoid/generate');
const nolookalikes = require('nanoid-dictionary/nolookalikes');

module.exports = generate.bind(null, nolookalikes);