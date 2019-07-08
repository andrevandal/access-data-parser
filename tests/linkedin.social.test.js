const AccessData = require('../src/index')

describe('duckduckgo search support', () => {
  test('referrer = https://www.linkedin.com', () => {
    expect(
      new AccessData({
        referrer: 'https://www.linkedin.com'
      })
    ).toMatchObject({
      source: 'linkedin',
      medium: 'social',
      referrer: 'https://www.linkedin.com'
    })
  })

  test('referral = https://www.linkedin.com', () => {
    expect(
      new AccessData({
        referral: 'https://www.linkedin.com'
      })
    ).toMatchObject({
      source: 'linkedin',
      medium: 'social',
      referrer: 'https://www.linkedin.com'
    })
  })

  test('referrer = http://www.linkedin.com', () => {
    expect(
      new AccessData({
        referrer: 'http://www.linkedin.com'
      })
    ).toMatchObject({
      source: 'linkedin',
      medium: 'social',
      referrer: 'http://www.linkedin.com'
    })
  })
  test('referral = http://www.linkedin.com', () => {
    expect(
      new AccessData({
        referral: 'http://www.linkedin.com'
      })
    ).toMatchObject({
      source: 'linkedin',
      medium: 'social',
      referrer: 'http://www.linkedin.com'
    })
  })
})
