const AccessData = require('../src/index')

describe('yahoo search support', () => {
  test('referrer = https://search.yahoo.com', () => {
    expect(
      new AccessData({
        referrer: 'https://search.yahoo.com'
      })
    ).toMatchObject({
      source: 'yahoo',
      medium: 'organic',
      referrer: 'https://search.yahoo.com'
    })
  })

  test('referral = https://search.yahoo.com', () => {
    expect(
      new AccessData({
        referral: 'https://search.yahoo.com'
      })
    ).toMatchObject({
      source: 'yahoo',
      medium: 'organic',
      referrer: 'https://search.yahoo.com'
    })
  })

  test('referrer = http://search.yahoo.com', () => {
    expect(
      new AccessData({
        referrer: 'http://search.yahoo.com'
      })
    ).toMatchObject({
      source: 'yahoo',
      medium: 'organic',
      referrer: 'http://search.yahoo.com'
    })
  })
  test('referral = http://search.yahoo.com', () => {
    expect(
      new AccessData({
        referral: 'http://search.yahoo.com'
      })
    ).toMatchObject({
      source: 'yahoo',
      medium: 'organic',
      referrer: 'http://search.yahoo.com'
    })
  })

  test('referrer = https://br.search.yahoo.com', () => {
    expect(
      new AccessData({
        referrer: 'https://br.search.yahoo.com'
      })
    ).toMatchObject({
      source: 'yahoo',
      medium: 'organic',
      referrer: 'https://br.search.yahoo.com'
    })
  })
  test('referral = https://br.search.yahoo.com', () => {
    expect(
      new AccessData({
        referral: 'https://br.search.yahoo.com'
      })
    ).toMatchObject({
      source: 'yahoo',
      medium: 'organic',
      referrer: 'https://br.search.yahoo.com'
    })
  })

  test('referrer = br.search.yahoo.com', () => {
    expect(
      new AccessData({
        referrer: 'br.search.yahoo.com'
      })
    ).toMatchObject({
      source: 'yahoo',
      medium: 'organic',
      referrer: 'https://br.search.yahoo.com'
    })
  })
  test('referral = br.search.yahoo.com', () => {
    expect(
      new AccessData({
        referral: 'br.search.yahoo.com'
      })
    ).toMatchObject({
      source: 'yahoo',
      medium: 'organic',
      referrer: 'https://br.search.yahoo.com'
    })
  })
})
