const renameKeys = require('./lib/renameKeys')
const pickBy = require('lodash.pickby')

const defaultQueryKeys = {
  utm_source: 'source',
  utm_medium: 'medium',
  utm_campaign: 'campaign',
  utm_content: 'content',
  utm_term: 'term',
  utmSource: 'source',
  utmMedium: 'medium',
  utmCampaign: 'campaign',
  utmContent: 'content',
  utmTerm: 'term',
  referral: 'referrer'
}

const accesData = function(queries) {
  let {
    referrer,
    source,
    medium,
    campaign,
    content,
    term,
    gclid,
    fbclid
  } = renameKeys(defaultQueryKeys, queries)

  if (referrer) {
    referrer = /^(http|https):\/\//.test(referrer)
      ? referrer
      : `https://${referrer}`
  }

  this.isGoogleAds = !!gclid || source === 'googleads'
  this.isFacebookAds = !!fbclid || source === 'facebookads'
  this.isGoogleSearch = !!referrer && referrer.match(/google.com/)

  if ((this.isGoogleAds || this.isFacebookAds) && !medium) medium = 'cpc'

  if (this.isGoogleAds) source = 'googleads'
  else if (this.isFacebookAds) {
    source = 'facebookads'
  } else if (this.isGoogleSearch) {
    source = 'google'
    medium = 'organic'
  }

  return pickBy({
    source,
    medium,
    campaign,
    content,
    term,
    fbclid,
    gclid,
    referrer
  })
}
module.exports = accesData
