const AccessData = require('../src/index')

describe('google search support', () => {
  test('referrer = https://google.com', () => {
    expect(
      new AccessData({
        referrer: 'https://google.com'
      })
    ).toMatchObject({
      source: 'google',
      medium: 'organic',
      referrer: 'https://google.com'
    })
  })

  test('referral = https://google.com', () => {
    expect(
      new AccessData({
        referral: 'https://google.com'
      })
    ).toMatchObject({
      source: 'google',
      medium: 'organic',
      referrer: 'https://google.com'
    })
  })

  test('referrer = http://google.com', () => {
    expect(
      new AccessData({
        referrer: 'http://google.com'
      })
    ).toMatchObject({
      source: 'google',
      medium: 'organic',
      referrer: 'http://google.com'
    })
  })
  test('referral = http://google.com', () => {
    expect(
      new AccessData({
        referral: 'http://google.com'
      })
    ).toMatchObject({
      source: 'google',
      medium: 'organic',
      referrer: 'http://google.com'
    })
  })

  test('referrer = https://google.com.br', () => {
    expect(
      new AccessData({
        referrer: 'https://google.com.br'
      })
    ).toMatchObject({
      source: 'google',
      medium: 'organic',
      referrer: 'https://google.com.br'
    })
  })
  test('referral = https://google.com.br', () => {
    expect(
      new AccessData({
        referral: 'https://google.com.br'
      })
    ).toMatchObject({
      source: 'google',
      medium: 'organic',
      referrer: 'https://google.com.br'
    })
  })

  test('referrer = google.com.br', () => {
    expect(
      new AccessData({
        referrer: 'google.com.br'
      })
    ).toMatchObject({
      source: 'google',
      medium: 'organic',
      referrer: 'https://google.com.br'
    })
  })
  test('referral = google.com.br', () => {
    expect(
      new AccessData({
        referral: 'google.com.br'
      })
    ).toMatchObject({
      source: 'google',
      medium: 'organic',
      referrer: 'https://google.com.br'
    })
  })
})
