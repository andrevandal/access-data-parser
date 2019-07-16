const referrerTypes = require('../configs/referrerTypes')
const isUrl = require('is-url')

const parseReferrer = referrer => {
  const findType = referrerTypes.find(type => referrer.match(type.regex))
  if (findType) return findType
  return {
    source: !isUrl(referrer) ? referrer : new URL(referrer).hostname,
    medium: 'referral'
  }
}

module.exports = parseReferrer
