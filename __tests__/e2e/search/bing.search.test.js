import AccessData from '@/index.ts'

import { describe, expect, test } from 'vitest';
describe('bing search support', () => {
  test('referrer = https://bing.com', () => {
    expect(
      new AccessData({
        referrer: 'https://bing.com'
      })
    ).toMatchObject({
      source: 'bing',
      medium: 'organic',
      referrer: 'https://bing.com',
      channel: 'organic'
    })
  })

  test('referral = https://bing.com', () => {
    expect(
      new AccessData({
        referral: 'https://bing.com'
      })
    ).toMatchObject({
      source: 'bing',
      medium: 'organic',
      referrer: 'https://bing.com',
      channel: 'organic'
    })
  })

  test('referrer = http://bing.com', () => {
    expect(
      new AccessData({
        referrer: 'http://bing.com'
      })
    ).toMatchObject({
      source: 'bing',
      medium: 'organic',
      referrer: 'http://bing.com',
      channel: 'organic'
    })
  })
  test('referral = http://bing.com', () => {
    expect(
      new AccessData({
        referral: 'http://bing.com'
      })
    ).toMatchObject({
      source: 'bing',
      medium: 'organic',
      referrer: 'http://bing.com',
      channel: 'organic'
    })
  })

  test('referrer = https://br.bing.com', () => {
    expect(
      new AccessData({
        referrer: 'https://br.bing.com'
      })
    ).toMatchObject({
      source: 'bing',
      medium: 'organic',
      referrer: 'https://br.bing.com',
      channel: 'organic'
    })
  })
  test('referral = https://br.bing.com', () => {
    expect(
      new AccessData({
        referral: 'https://br.bing.com'
      })
    ).toMatchObject({
      source: 'bing',
      medium: 'organic',
      referrer: 'https://br.bing.com',
      channel: 'organic'
    })
  })
})
