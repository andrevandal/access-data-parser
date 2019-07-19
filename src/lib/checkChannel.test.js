const checkChannel = require('./checkChannel')

const mediumTypes = require('../configs/mediumTypes')
const randomString = Math.random()
  .toString(36)
  .substring(7)

const defaultChannels = [
  'direct',
  'organic',
  'social',
  'paid',
  'display',
  'referral',
  randomString
]

defaultChannels.forEach(channel =>
  mediumTypes.push({ id: channel, channel: channel })
)

describe('CheckChannel', () => {
  mediumTypes.forEach(element => {
    test(`send ${element.id} => return ${element.channel}`, () => {
      expect(checkChannel(element.id)).toMatch(element.channel)
    })
  })
})
