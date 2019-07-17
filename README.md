# Access Data Parser

[![GitHub issues](https://img.shields.io/github/issues/derevandal/access-data-parser.svg)](https://github.com/derevandal/access-data-parser/issues)
[![GitHub stars](https://img.shields.io/github/stars/derevandal/access-data-parser.svg)](https://github.com/derevandal/access-data-parser/stargazers)
[![GitHub license](https://img.shields.io/github/license/derevandal/access-data-parser.svg)](https://github.com/derevandal/access-data-parser/blob/master/LICENSE)
[![Coverage Status](https://coveralls.io/repos/github/derevandal/access-data-parser/badge.svg?branch=master)](https://coveralls.io/github/derevandal/access-data-parser?branch=master)
[![Build Status](https://travis-ci.org/derevandal/access-data-parser.svg?branch=master)](https://travis-ci.org/derevandal/access-data-parser)
[![npm version](https://badge.fury.io/js/access-data-parser.svg)](https://badge.fury.io/js/access-data-parser)

> This module will receive `document.referrer` and some query params to determine where access come from.

## Install

```bash
yarn add access-data-parser
```

## Usage

```js
const AccessData = require("access-data-parser");

const queriesFromBrowser = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  referrer: "https://google.com/"
};

console.log(new AccessData(queriesFromBrowser));
/* expected:
 {
   source: 'google',
   medium: 'organic',
   referrer: 'https://google.com/',
   channel: 'organic'
 }
*/
```

## Params Supported

- source
- medium
- campaign
- content
- term
- referrer
- fbclid
- gclid

## Default Channels

- direct
- organic
- social
- paid
- display
- referral

## Contributing

PRs accepted.

## License

MIT © ANDRÉ VAN DAL
