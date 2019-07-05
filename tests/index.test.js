const AccessData = require('../src/index')

describe('test rename props', () => {
  test('utm_source like to source', () => {
    expect(
      new AccessData({
        utm_source: 'source',
        utm_medium: 'medium',
        utm_campaign: 'campaign',
        utm_content: 'content',
        utm_term: 'term'
      })
    ).toMatchObject({
      source: 'source',
      medium: 'medium',
      campaign: 'campaign',
      content: 'content',
      term: 'term'
    })
  })

  test('utmSource like to source', () => {
    expect(
      new AccessData({
        utmSource: 'source',
        utmMedium: 'medium',
        utmCampaign: 'campaign',
        utmContent: 'content',
        utmTerm: 'term'
      })
    ).toMatchObject({
      source: 'source',
      medium: 'medium',
      campaign: 'campaign',
      content: 'content',
      term: 'term'
    })
  })

  test('referral to referrer', () => {
    expect(
      new AccessData({
        referral: 'referral'
      })
    ).toMatchObject({
      referrer: 'referral'
    })
  })
})
