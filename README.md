# `eslint-config-stimulus`

[![npm version](https://img.shields.io/npm/v/eslint-plugin-stimulus.svg?style=flat)](https://npmjs.org/package/eslint-plugin-stimulus 'View this project on npm')
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

ESLint plugin for [Stimulus Controllers](https://stimulus.hotwired.dev/).

## Install

Assuming you already have ESLint installed, run:

```sh
npm install eslint-plugin-stimulus --save-dev
```

## Usage

Then extend the recommended eslint config:

```js
import {configs} from 'eslint-plugin-stimulus';

export default [
  configs.recommended,
];
```

## Supported Rules

### Possible Errors (Recommended)

- [stimulus/no-invalid-targets](docs/rules/no-invalid-targets.md)

## License

`eslint-plugin-stimulus` is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
