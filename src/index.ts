import renameKeys from './lib/renameKeys'
import pickBy from './lib/pickBy'
import parseReferrer from './lib/parseReferrer'
import checkChannel from './lib/checkChannel'

interface defaultQueryKeysProps {
  utm_source: string,
  utm_medium: string,
  utm_campaign: string,
  utm_content: string,
  utm_term: string,
  utmSource: string,
  utmMedium: string,
  utmCampaign: string,
  utmContent: string,
  utmTerm: string,
  referral: string
}

const defaultQueryKeys: defaultQueryKeysProps = {
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
  queries = { ...renameKeys(defaultQueryKeys, queries) }

  this.isGoogleAds = !!queries.gclid || queries.source === 'googleads'
  this.isFacebookAds = !!queries.fbclid || queries.source === 'facebookads'
  this.isDirectAccess =
    !queries.source &&
    !queries.referrer &&
    !this.isFacebookAds &&
    !this.isGoogleAds

  if (this.isDirectAccess)
    return {
      source: 'direct',
      medium: '(not set)',
      channel: 'direct'
    }

  if (this.isGoogleAds || this.isFacebookAds) {
    if (!queries.medium) queries.medium = 'cpc'
    return {
      ...queries,
      source: this.isGoogleAds ? 'googleads' : 'facebookads',
      channel: checkChannel(queries.medium)
    }
  }

  if (queries.referrer) {
    const { source, medium } = parseReferrer(queries.referrer)
    return {
      ...queries,
      source: source,
      medium: medium,
      channel: checkChannel(medium)
    }
  }
  return pickBy({ ...queries, channel: checkChannel(queries.medium) })
}

export default accesData
