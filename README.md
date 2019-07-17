# Access Data Parser
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

[![GitHub issues](https://img.shields.io/github/issues/derevandal/access-data-parser.svg)](https://github.com/derevandal/access-data-parser/issues)
[![GitHub stars](https://img.shields.io/github/stars/derevandal/access-data-parser.svg)](https://github.com/derevandal/access-data-parser/stargazers)
[![GitHub license](https://img.shields.io/github/license/derevandal/access-data-parser.svg)](https://github.com/derevandal/access-data-parser/blob/master/LICENSE)
[![Coverage Status](https://coveralls.io/repos/github/derevandal/access-data-parser/badge.svg?branch=master&kill_cache=1)](https://coveralls.io/github/derevandal/access-data-parser?branch=master)
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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://andrevandal.dev"><img src="https://avatars2.githubusercontent.com/u/1340508?v=4" width="100px;" alt="André Van Dal"/><br /><sub><b>André Van Dal</b></sub></a><br /><a href="#infra-derevandal" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-derevandal" title="Maintenance">🚧</a> <a href="https://github.com/derevandal/access-data-parser/commits?author=derevandal" title="Tests">⚠️</a> <a href="https://github.com/derevandal/access-data-parser/commits?author=derevandal" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!