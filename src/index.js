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

  this.hasReferrer = !!referrer
  this.isGoogleAds = !!gclid || source === 'googleads'
  this.isFacebookAds = !!fbclid || source === 'facebookads'
  this.isGoogleSearch = this.hasReferrer && referrer.match(/google.com/)
  this.isBingSearch = this.hasReferrer && referrer.match(/bing.com/)
  this.isDuckSearch = this.hasReferrer && referrer.match(/duckduckgo.com/)
  this.isYahooSearch = this.hasReferrer && referrer.match(/search.yahoo.com/)

  this.isFacebookSocial = this.hasReferrer && referrer.match(/facebook.com/)
  this.isInstagramSocial = this.hasReferrer && referrer.match(/instagram.com/)

  if ((this.isGoogleAds || this.isFacebookAds) && !medium) medium = 'cpc'

  if (this.hasReferrer) {
    referrer = /^(http|https):\/\//.test(referrer)
      ? referrer
      : `https://${referrer}`
  }

  if (this.isGoogleAds) source = 'googleads'
  else if (this.isFacebookAds) {
    source = 'facebookads'
  } else if (this.isGoogleSearch) {
    source = 'google'
    medium = 'organic'
  } else if (this.isBingSearch) {
    source = 'bing'
    medium = 'organic'
  } else if (this.isDuckSearch) {
    source = 'duckduckgo'
    medium = 'organic'
  } else if (this.isYahooSearch) {
    source = 'yahoo'
    medium = 'organic'
  } else if (this.isFacebookSocial) {
    source = 'facebook'
    medium = 'social'
  } else if (this.isInstagramSocial) {
    source = 'instagram'
    medium = 'social'
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
