# Access Data Parser

> This module will receive `document.referrer` and some query params to determine where access come from.

## Install

```bash
yarn add access-data-parser
```

## Usage

```js
const AccessData = require('access-data-parser')

const queriesFromBrowser = {
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_content: '',
  utm_term: '',
  referrer: 'https://google.com/'
}

console.log(new AccessData(queriesFromBrowser))
/* expected:
 {
   source: 'google',
   medium: 'organic',
   referrer: 'https://google.com/'
 }
*/
```

## Contributing

PRs accepted.

## License

MIT © ANDRÉ VAN DAL
