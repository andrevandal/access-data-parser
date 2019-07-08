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

  this.isGoogleAds = !!gclid || source === 'googleads'
  this.isFacebookAds = !!fbclid || source === 'facebookads'

  if ((this.isGoogleAds || this.isFacebookAds) && !medium) medium = 'cpc'

  if (this.isGoogleAds) source = 'googleads'
  else if (this.isFacebookAds) {
    source = 'facebookads'
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
