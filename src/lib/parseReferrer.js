import referrerTypes from '../configs/referrerTypes'
import isUrl from 'is-url'

const parseReferrer = referrer => {
  const findType = referrerTypes.find(type => referrer.match(type.regex))
  if (findType) return findType
  return {
    source: !isUrl(referrer) ? referrer : new URL(referrer).hostname,
    medium: 'referral'
  }
}

export default parseReferrer
