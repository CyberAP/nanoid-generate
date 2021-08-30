# nanoid-generate

Custom [nanoid generate](https://github.com/ai/nanoid#custom-alphabet-or-length) functions with predefined character sets. Uses [nanoid-dictionary](https://github.com/CyberAP/nanoid-dictionary) as a dictionary.

## Usage

Install nanoid-generate

`npm i nanoid-generate -S`

Then pick a desired generator and set its' output string length

```javascript
const generate = require('nanoid-generate');

const englishRandomString = generate.english(10);
```

Or instead require a specific generator

```javascript
const nolookalikes = require('nanoid-generate/nolookalikes');

const nolookalikesRndString = nolookalikes(10);
```

## Generators

### `numbers`

Numbers from 0 to 9

```javascript
const numbers = require('nanoid-generator/numbers');
```

### `lowercase`

Lowercase English letters.

```javascript
const englishLowercase = require('nanoid-generator/lowercase');
```

### `uppercase`

Uppercase English letters.

```javascript
const englishUppercase = require('nanoid-generator/uppercase');
```

### `alphanumeric`

Uppercase and lowercase English letters with numbers.

```javascript
const alphanumeric = require('nanoid-generator/alphanumeric');
```

### `english`

English alphabet.

```javascript
const englishUppercase = require('nanoid-generator/english');
```

### `nolookalikes`

Numbers and english alphabet without lookalikes: `1`, `l`, `I`, `0`, `O`, `o`, `u`, `v`

```javascript
const nolookalikes = require('nanoid-generator/nolookalikes');
```
