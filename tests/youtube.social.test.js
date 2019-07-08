const AccessData = require('../src/index')

describe('duckduckgo search support', () => {
  test('referrer = https://youtube.com', () => {
    expect(
      new AccessData({
        referrer: 'https://youtube.com'
      })
    ).toMatchObject({
      source: 'youtube',
      medium: 'social',
      referrer: 'https://youtube.com'
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
      referrer: 'https://youtube.com'
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
      referrer: 'http://youtube.com'
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
      referrer: 'http://youtube.com'
    })
  })
})
