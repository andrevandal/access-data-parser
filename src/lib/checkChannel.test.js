const checkChannel = require('./checkChannel')

const mediumTypes = require('../configs/mediumTypes')
const randomString = Math.random()
  .toString(36)
  .substring(7)

mediumTypes.push({ id: randomString, channel: randomString })

describe('CheckChannel', () => {
  mediumTypes.forEach(element => {
    test(`send ${element.id} => return ${element.channel}`, () => {
      expect(checkChannel(element.id)).toMatch(element.channel)
    })
  })
})
