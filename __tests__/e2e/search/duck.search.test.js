import AccessData from '@/index.ts'

import { describe, expect, test } from 'vitest';
describe('duckduckgo search support', () => {
  test('referrer = https://duckduckgo.com', () => {
    expect(
      new AccessData({
        referrer: 'https://duckduckgo.com'
      })
    ).toMatchObject({
      source: 'duckduckgo',
      medium: 'organic',
      referrer: 'https://duckduckgo.com',
      channel: 'organic'
    })
  })

  test('referral = https://duckduckgo.com', () => {
    expect(
      new AccessData({
        referral: 'https://duckduckgo.com'
      })
    ).toMatchObject({
      source: 'duckduckgo',
      medium: 'organic',
      referrer: 'https://duckduckgo.com',
      channel: 'organic'
    })
  })

  test('referrer = http://duckduckgo.com', () => {
    expect(
      new AccessData({
        referrer: 'http://duckduckgo.com'
      })
    ).toMatchObject({
      source: 'duckduckgo',
      medium: 'organic',
      referrer: 'http://duckduckgo.com',
      channel: 'organic'
    })
  })
  test('referral = http://duckduckgo.com', () => {
    expect(
      new AccessData({
        referral: 'http://duckduckgo.com'
      })
    ).toMatchObject({
      source: 'duckduckgo',
      medium: 'organic',
      referrer: 'http://duckduckgo.com',
      channel: 'organic'
    })
  })
})
