import AccessData from '@/index.ts'

import { describe, expect, test } from 'vitest';
describe('facebook search support', () => {
  test('referrer = https://facebook.com', () => {
    expect(
      new AccessData({
        referrer: 'https://facebook.com'
      })
    ).toMatchObject({
      source: 'facebook',
      medium: 'social',
      referrer: 'https://facebook.com',
      channel: 'social'
    })
  })

  test('referral = https://facebook.com', () => {
    expect(
      new AccessData({
        referral: 'https://facebook.com'
      })
    ).toMatchObject({
      source: 'facebook',
      medium: 'social',
      referrer: 'https://facebook.com',
      channel: 'social'
    })
  })

  test('referrer = http://facebook.com', () => {
    expect(
      new AccessData({
        referrer: 'http://facebook.com'
      })
    ).toMatchObject({
      source: 'facebook',
      medium: 'social',
      referrer: 'http://facebook.com',
      channel: 'social'
    })
  })
  test('referral = http://facebook.com', () => {
    expect(
      new AccessData({
        referral: 'http://facebook.com'
      })
    ).toMatchObject({
      source: 'facebook',
      medium: 'social',
      referrer: 'http://facebook.com',
      channel: 'social'
    })
  })
})
