# node-random-number [![NPM version](https://img.shields.io/npm/v/node-random-number.svg)](https://npmjs.com/package/node-random-number) [![NPM downloads](https://img.shields.io/npm/dm/node-random-number.svg)](https://npmjs.com/package/node-random-number) [![testen badge](https://img.shields.io/badge/testen-passing-brightgreen.svg)][testen repo]

[testen repo]: https://github.com/egoist/testen

> Generate one or more random unique numbers in a range.

## Install

```bash
$ npm install --save node-random-number
```

## Usage

```js
const random = require('node-random-number')

// get a random integer between 0 ~ 100 (100 in not includede)
random()
//=> [58]

random({start: 3, end: 9})
//=> [7]

random({count: 3})
//=> [2, 37, 87]
```

## API

### nodeRandomNumber(opts)

#### opts

##### start

Type: `number`<br>
Default: `0`

The start of the range, included.

##### end

Type: `number`<br>
Default: `100`

The end of the range, not included.

##### count

Type: `number`<br>
Default: `1`

How many numbers you wanna get, should be smaller than the range length.

## License

MIT © [EGOIST](https://github.com/egoist)
