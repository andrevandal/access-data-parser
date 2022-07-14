import AccessData from '../../src/index'

import { describe, expect, test } from 'vitest';
describe('instagram search support', () => {
  test('referrer = https://instagram.com', () => {
    expect(
      new AccessData({
        referrer: 'https://instagram.com'
      })
    ).toMatchObject({
      source: 'instagram',
      medium: 'social',
      referrer: 'https://instagram.com',
      channel: 'social'
    })
  })

  test('referral = https://instagram.com', () => {
    expect(
      new AccessData({
        referral: 'https://instagram.com'
      })
    ).toMatchObject({
      source: 'instagram',
      medium: 'social',
      referrer: 'https://instagram.com',
      channel: 'social'
    })
  })

  test('referrer = http://instagram.com', () => {
    expect(
      new AccessData({
        referrer: 'http://instagram.com'
      })
    ).toMatchObject({
      source: 'instagram',
      medium: 'social',
      referrer: 'http://instagram.com',
      channel: 'social'
    })
  })
  test('referral = http://instagram.com', () => {
    expect(
      new AccessData({
        referral: 'http://instagram.com'
      })
    ).toMatchObject({
      source: 'instagram',
      medium: 'social',
      referrer: 'http://instagram.com',
      channel: 'social'
    })
  })
})
