const AccessData = require('../src/index')

describe('duckduckgo search support', () => {
  test('referrer = https://facebook.com', () => {
    expect(
      new AccessData({
        referrer: 'https://facebook.com'
      })
    ).toMatchObject({
      source: 'facebook',
      medium: 'social',
      referrer: 'https://facebook.com'
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
      referrer: 'https://facebook.com'
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
      referrer: 'http://facebook.com'
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
      referrer: 'http://facebook.com'
    })
  })
})
