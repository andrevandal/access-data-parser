import AccessData from '@/index.ts'

import { describe, expect, test } from 'vitest'

describe('referer support', () => {
  test('url referrer', () => {
    expect(
      new AccessData({
        referrer: 'https://github.com',
      })
    ).toMatchObject({
      channel: 'referral',
      source: 'github.com',
      medium: 'referral',
    })
  })

  test('plain referral', () => {
    expect(
      new AccessData({
        referrer: 'github.com',
      })
    ).toMatchObject({
      channel: 'referral',
      source: 'github.com',
      medium: 'referral',
    })
  })
})
