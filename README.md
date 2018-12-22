# nanoid-generate

Custom [nanoid generate](https://github.com/ai/nanoid#custom-alphabet-or-length) functions with predefined character sets.

## Usage

Install nanoid-generate, pick a desired generator and set output string length

`npm i nanoid-generate -S`

```javascript
const generate = require('nanoid-generate');

const lowercaseRandomString = generate.english(10);
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
