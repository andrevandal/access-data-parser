import AccessData from '@/index.ts'

import { describe, expect, test } from 'vitest'

describe('google search support', () => {
  test('referrer = https://google.com', () => {
    expect(
      new AccessData({
        referrer: 'https://google.com',
      })
    ).toMatchObject({
      source: 'google',
      medium: 'organic',
      referrer: 'https://google.com',
      channel: 'organic',
    })
  })

  test('referral = https://google.com', () => {
    expect(
      new AccessData({
        referral: 'https://google.com',
      })
    ).toMatchObject({
      source: 'google',
      medium: 'organic',
      referrer: 'https://google.com',
      channel: 'organic',
    })
  })

  test('referrer = http://google.com', () => {
    expect(
      new AccessData({
        referrer: 'http://google.com',
      })
    ).toMatchObject({
      source: 'google',
      medium: 'organic',
      referrer: 'http://google.com',
      channel: 'organic',
    })
  })
  test('referral = http://google.com', () => {
    expect(
      new AccessData({
        referral: 'http://google.com',
      })
    ).toMatchObject({
      source: 'google',
      medium: 'organic',
      referrer: 'http://google.com',
      channel: 'organic',
    })
  })

  test('referrer = https://google.com.br', () => {
    expect(
      new AccessData({
        referrer: 'https://google.com.br',
      })
    ).toMatchObject({
      source: 'google',
      medium: 'organic',
      referrer: 'https://google.com.br',
      channel: 'organic',
    })
  })
  test('referral = https://google.com.br', () => {
    expect(
      new AccessData({
        referral: 'https://google.com.br',
      })
    ).toMatchObject({
      source: 'google',
      medium: 'organic',
      referrer: 'https://google.com.br',
      channel: 'organic',
    })
  })
})
