const AccessData = require('../../src/index')

describe('test facebook ads support', () => {
  test('complete UTMs', () => {
    expect(
      new AccessData({
        utm_source: 'facebookads',
        utm_medium: 'cpc',
        utm_campaign: 'campaign',
        utm_content: 'content',
        utm_term: 'keyword',
        fbclid: 'fbclid'
      })
    ).toMatchObject({
      source: 'facebookads',
      medium: 'cpc',
      campaign: 'campaign',
      content: 'content',
      term: 'keyword',
      fbclid: 'fbclid'
    })
  })

  test('only fbclid', () => {
    expect(
      new AccessData({
        fbclid: 'fbclid'
      })
    ).toMatchObject({
      source: 'facebookads',
      medium: 'cpc',
      fbclid: 'fbclid'
    })
  })

  test('only source', () => {
    expect(
      new AccessData({
        source: 'facebookads'
      })
    ).toMatchObject({
      source: 'facebookads',
      medium: 'cpc'
    })
  })
})
