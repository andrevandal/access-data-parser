import AccessData from '../../src/index'

import { describe, expect, test } from 'vitest';
describe('test google ads support', () => {
  test('complete UTMs', () => {
    expect(
      new AccessData({
        utm_source: 'googleads',
        utm_medium: 'cpc',
        utm_campaign: 'campaign',
        utm_content: 'content',
        utm_term: 'ketword',
        gclid: 'gclid'
      })
    ).toMatchObject({
      source: 'googleads',
      medium: 'cpc',
      campaign: 'campaign',
      content: 'content',
      term: 'ketword',
      gclid: 'gclid',
      channel: 'paid'
    })
  })

  test('only gclid', () => {
    expect(
      new AccessData({
        gclid: 'gclid'
      })
    ).toMatchObject({
      source: 'googleads',
      medium: 'cpc',
      gclid: 'gclid',
      channel: 'paid'
    })
  })

  test('only source', () => {
    expect(
      new AccessData({
        source: 'googleads'
      })
    ).toMatchObject({
      source: 'googleads',
      medium: 'cpc',
      channel: 'paid'
    })
  })
})
