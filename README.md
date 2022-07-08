# Access Data Parser

<p align="center">
  <a href="https://github.com/derevandal/access-data-parser/issues">
    <img src="https://img.shields.io/github/issues/derevandal/access-data-parser.svg" alt="GitHub issues" />
   </a>
  <a href="https://github.com/derevandal/access-data-parser/stargazers">
    <img src="https://img.shields.io/github/stars/derevandal/access-data-parser.svg?color=%234c1" alt="GitHub stars" />
  </a>  
  <a href="#contributors">
    <img src="https://img.shields.io/badge/all_contributors-1-orange.svg?color=%234c1" alt="All Contributors" />
  </a>
  <a href="https://badge.fury.io/js/access-data-parser">
    <img src="https://badge.fury.io/js/access-data-parser.svg" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/access-data-parser">
    <img src="https://img.shields.io/npm/dw/access-data-parser.svg" alt="npm downloads" />
  </a>

  <a href="https://renovatebot.com">
    <img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg" alt="renovate enabled" />
  </a>
  <a href="https://travis-ci.org/derevandal/access-data-parser">
    <img alt="Travis (.org) branch" src="https://img.shields.io/travis/derevandal/access-data-parser/master">
  </a>  
  <a href="https://codecov.io/gh/derevandal/access-data-parser">
    <img src="https://codecov.io/gh/derevandal/access-data-parser/branch/master/graph/badge.svg" />
  </a>  
  <a href="https://requires.io/github/derevandal/access-data-parser/requirements/?branch=master">
    <img src="https://requires.io/github/derevandal/access-data-parser/requirements.svg?branch=master" alt="Requirements Status" />
  </a>  
  <a href="https://github.com/derevandal/access-data-parser/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/derevandal/access-data-parser?color=%234c1" alt="GitHub license" />
  </a>
  <a href="https://app.fossa.io/projects/git%2Bgithub.com%2Fderevandal%2Faccess-data-parser?ref=badge_shield">
    <img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Fderevandal%2Faccess-data-parser.svg?type=shield"  alt="FOSSA Status" />
  </a>
</p>

This module will receive `document.referrer` and some query params to determine where access come from.

## To Do 

- [] Add eslint support
- [] Add prettier support
- [] Refactor codebase into Typescript
- [] Allow Typescript types export automatically
- [] Use Vite bundler (https://vitejs.dev/guide/build.html#library-mode)
- [] Add Github Action to run coverage tests

## Install

```bash
yarn add access-data-parser
```

## Usage

```js
import AccessData from 'access-data-parser'

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
