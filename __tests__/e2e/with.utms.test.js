import AccessData from '@/index.ts'

import { describe, expect, test } from 'vitest'

describe('test rename props', () => {
  test('utm_source like to source', () => {
    expect(
      new AccessData({
        utm_source: 'source',
        utm_medium: 'medium',
        utm_campaign: 'campaign',
        utm_content: 'content',
        utm_term: 'term',
      })
    ).toMatchObject({
      source: 'source',
      medium: 'medium',
      campaign: 'campaign',
      content: 'content',
      term: 'term',
      channel: 'medium',
    })
  })

  test('utmSource like to source', () => {
    expect(
      new AccessData({
        utmSource: 'source',
        utmMedium: 'medium',
        utmCampaign: 'campaign',
        utmContent: 'content',
        utmTerm: 'term',
      })
    ).toMatchObject({
      source: 'source',
      medium: 'medium',
      campaign: 'campaign',
      content: 'content',
      term: 'term',
      channel: 'medium',
    })
  })

  test('referral to referrer', () => {
    expect(
      new AccessData({
        referral: 'referral',
      })
    ).toMatchObject({
      referrer: 'referral',
      channel: 'referral',
    })
  })
})

describe('test some channels', () => {
  test('channel == email', () => {
    expect(
      new AccessData({
        utm_source: 'RD+Station',
        utm_medium: 'email',
      })
    ).toMatchObject({
      source: 'RD+Station',
      medium: 'email',
      channel: 'email',
    })
  })
  test('channel == e-mail', () => {
    expect(
      new AccessData({
        utm_source: 'RD+Station',
        utm_medium: 'e-mail',
      })
    ).toMatchObject({
      source: 'RD+Station',
      medium: 'e-mail',
      channel: 'email',
    })
  })
  test('channel == social', () => {
    expect(
      new AccessData({
        utm_source: 'blog',
        utm_medium: 'sm',
      })
    ).toMatchObject({
      source: 'blog',
      medium: 'sm',
      channel: 'social',
    })
  })
})
