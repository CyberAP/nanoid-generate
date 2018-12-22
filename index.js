const generate = require('nanoid/generate');
const dictionary = require('nanoid-dictionary');
const lowercase = dictionary.lowercase;
const uppercase = dictionary.uppercase;
const english = lowercase + uppercase;

module.exports = {
    lowercase: generate.bind(null, lowercase),
    uppercase: generate.bind(null, uppercase),
    english: generate.bind(null, english),
    numbers: generate.bind(null, dictionary.numbers),
    nolookalikes: generate.bind(null, dictionary.nolookalikes),
}