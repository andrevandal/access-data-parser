import isUrl from 'is-url'
import referrerTypes from '../configs/referrerTypes'

const parseReferrer = (referrer: string) => {
  const findType = referrerTypes.find((type) => referrer.match(type.regex))
  if (findType) return findType
  return {
    source: !isUrl(referrer) ? referrer : new URL(referrer).hostname,
    medium: 'referral',
  }
}

export default parseReferrer
