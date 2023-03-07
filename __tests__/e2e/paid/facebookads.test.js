import AccessData from '@/index.ts'

import { describe, expect, test } from 'vitest'

describe('test facebook ads support', () => {
  test('complete UTMs', () => {
    expect(
      new AccessData({
        utm_source: 'facebookads',
        utm_medium: 'cpm',
        utm_campaign: 'campaign',
        utm_content: 'content',
        utm_term: 'keyword',
        fbclid: 'fbclid',
      })
    ).toMatchObject({
      source: 'facebookads',
      medium: 'cpm',
      campaign: 'campaign',
      content: 'content',
      term: 'keyword',
      fbclid: 'fbclid',
      channel: 'display',
    })
  })

  test('only source', () => {
    expect(
      new AccessData({
        source: 'facebookads',
      })
    ).toMatchObject({
      source: 'facebookads',
      medium: 'cpc',
      channel: 'paid',
    })
  })
})
