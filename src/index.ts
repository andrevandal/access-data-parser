import {
  defaultQueryKeysProps,
  accessDataParams,
  accessDataResponse,
} from '@/types.js'
import renameKeys from '@/lib/renameKeys.js'
import pickBy from '@/lib/pickBy.js'
import parseReferrer from '@/lib/parseReferrer.js'
import checkChannel from '@/lib/checkChannel.js'

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
  referral: 'referrer',
}

function accessData(oldQueries: defaultQueryKeysProps) {
  const queries = {
    ...renameKeys(defaultQueryKeys, oldQueries),
  } as accessDataParams

  const isGoogleAds = !!queries.gclid || queries.source === 'googleads'
  const isFacebookAds = !!queries.fbclid || queries.source === 'facebookads'
  const isDirectAccess =
    !queries.source && !queries.referrer && !isFacebookAds && !isGoogleAds

  if (isDirectAccess)
    return {
      source: 'direct',
      medium: '(not set)',
      channel: 'direct',
    }

  if (isGoogleAds || isFacebookAds) {
    if (!queries.medium) queries.medium = 'cpc'
    return {
      ...queries,
      source: isGoogleAds ? 'googleads' : 'facebookads',
      channel: checkChannel(queries.medium),
    }
  }

  if (queries.referrer) {
    const { source, medium } = parseReferrer(queries.referrer)
    return {
      ...queries,
      source,
      medium,
      channel: checkChannel(medium),
    }
  }
  return pickBy({
    ...queries,
    channel: checkChannel(queries.medium),
  }) as accessDataResponse
}

export default accessData
