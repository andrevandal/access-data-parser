import AccessData from '@/index.ts'

import { describe, expect, test } from 'vitest';
describe('youtube search support', () => {
  test('referrer = https://youtube.com', () => {
    expect(
      new AccessData({
        referrer: 'https://youtube.com'
      })
    ).toMatchObject({
      source: 'youtube',
      medium: 'social',
      referrer: 'https://youtube.com',
      channel: 'social'
    })
  })

  test('referral = https://youtube.com', () => {
    expect(
      new AccessData({
        referral: 'https://youtube.com'
      })
    ).toMatchObject({
      source: 'youtube',
      medium: 'social',
      referrer: 'https://youtube.com',
      channel: 'social'
    })
  })

  test('referrer = http://youtube.com', () => {
    expect(
      new AccessData({
        referrer: 'http://youtube.com'
      })
    ).toMatchObject({
      source: 'youtube',
      medium: 'social',
      referrer: 'http://youtube.com',
      channel: 'social'
    })
  })
  test('referral = http://youtube.com', () => {
    expect(
      new AccessData({
        referral: 'http://youtube.com'
      })
    ).toMatchObject({
      source: 'youtube',
      medium: 'social',
      referrer: 'http://youtube.com',
      channel: 'social'
    })
  })
})
