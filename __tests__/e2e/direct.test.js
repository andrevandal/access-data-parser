import AccessData from '@/index.ts'

import { describe, expect, test } from 'vitest'

describe('direct access support', () => {
  test('without referrer', () => {
    expect(
      new AccessData({
        referrer: '',
      })
    ).toMatchObject({
      channel: 'direct',
      source: 'direct',
      medium: '(not set)',
    })
  })

  test('without referral', () => {
    expect(
      new AccessData({
        referral: '',
      })
    ).toMatchObject({
      channel: 'direct',
      source: 'direct',
      medium: '(not set)',
    })
  })
})
