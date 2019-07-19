# Access Data Parser

<p align="center">
  <a href="#contributors">
    <img src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square" alt="All Contributors">
  </a>
  <a href="https://github.com/derevandal/access-data-parser/issues">
    <img src="https://img.shields.io/github/issues/derevandal/access-data-parser.svg" alt="GitHub issues">
   </a>
  <a href="https://github.com/derevandal/access-data-parser/stargazers">
    <img src="https://img.shields.io/github/stars/derevandal/access-data-parser.svg" alt="GitHub stars">
  </a>
  
  <a href="https://github.com/derevandal/access-data-parser/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/derevandal/access-data-parser.svg" alt="GitHub license">
  </a>
  
  <a href="https://travis-ci.org/derevandal/access-data-parser">
    <img src="https://coveralls.io/repos/github/derevandal/access-data-parser/badge.svg?branch=master&kill_cache=1" alt="Build Status">
  </a>
  
  <a href="https://badge.fury.io/js/access-data-parser">
    <img src="https://badge.fury.io/js/access-data-parser.svg" alt="npm version">
  </a>
  
  <a href="https://renovatebot.com">
    <img src="https://badges.renovateapi.com/github/derevandal/access-data-parser" alt="renovate enabled">
  </a>
    
  <a href="https://david-dm.org/derevandal/access-data-parser">
    <img src="https://david-dm.org/derevandal/access-data-parser.svg" alt="Dependency Status">
  </a>
  
  <a href="https://david-dm.org/derevandal/access-data-parser/?type=dev">
    <img src="https://david-dm.org/derevandal/access-data-parser/dev-status.svg" alt="Dev Dependency Status">
  </a>

  <a href="https://www.npmjs.com/package/access-data-parser">
    <img alt="npm" src="https://img.shields.io/npm/dw/access-data-parser.svg">
  </a>
</p>

This module will receive `document.referrer` and some query params to determine where access come from.

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
