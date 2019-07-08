const AccessData = require('../src/index')

describe('direct access support', () => {
  test('without referrer', () => {
    expect(
      new AccessData({
        referrer: ''
      })
    ).toMatchObject({
      source: 'direct',
      medium: '(not set)'
    })
  })

  test('without referral', () => {
    expect(
      new AccessData({
        referral: ''
      })
    ).toMatchObject({
      source: 'direct',
      medium: '(not set)'
    })
  })
})
