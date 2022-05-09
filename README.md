# URILIFYR

The simplest way to get an URL ready string.

![npm-version]

## Usage:

```js

const urlifyr = require('urlifyr');
// or import urlifyr from 'urlifyr';

console.log(urlifyr('Hello World!'));
// outputs: hello-world

```

## Usage with options

```js

const urlifyr = require('urlifyr');
// or import urlifyr from 'urlifyr';

const cfg = {
  accept: '-',
  whiteSpace: '-',
  sz: true,
  special: '',
  lowerCase: true,
  trim: true,
}

console.log(urlifyr('Hello World!', cfg));
// outputs: hello-world

```

### Supported options

| Option | Type | Default | Remark |
| ------ | ---- | ------- | ------ |
| accept | String | `-` | Additional characters to be accepted. |
| whiteSpace | String | `-` | The replacement for white spaces. |
| special | String | `EMPTY`  | The replacement for not accepted characters. |
| lowerCase | Boolean | `true` | When `true` forces the output to be lower-case. |
| trim | Boolean | `true` | When `true` removes duplicated replacements. |
| sz | Boolean | `true` | When `true` replaces the German character `Eszet` with `sz` instead of `ss`.|

## Testing

```sh

$ yarn
$ yarn test

```

## Contributions

Contributions are welcome. 🙇‍♂️

This package is made on my spare time. If you find something wrong or think there is something that can be improved, please feel free to submit a pull-requests with your contribution and I will review it and get back to you ASAP.

Thank you! 🙏

[npm-version]: https://img.shields.io/npm/v/urlifyrr.svg?style=flat-square (NPM Package Version)
