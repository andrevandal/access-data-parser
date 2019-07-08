const AccessData = require('../src/index')

describe('duckduckgo search support', () => {
  test('referrer = https://instagram.com', () => {
    expect(
      new AccessData({
        referrer: 'https://instagram.com'
      })
    ).toMatchObject({
      source: 'instagram',
      medium: 'social',
      referrer: 'https://instagram.com'
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
      referrer: 'https://instagram.com'
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
      referrer: 'http://instagram.com'
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
      referrer: 'http://instagram.com'
    })
  })
})
