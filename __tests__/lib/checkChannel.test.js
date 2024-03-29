import { describe, expect, test } from 'vitest'
import checkChannel from '@/lib/checkChannel'
import mediumTypes from '@/configs/mediumTypes'

const randomString = Math.random().toString(36).substring(7)

const defaultChannels = [
  'direct',
  'organic',
  'social',
  'paid',
  'display',
  'referral',
  randomString,
]

defaultChannels.forEach((channel) => mediumTypes.push({ id: channel, channel }))

describe('CheckChannel', () => {
  mediumTypes.forEach((element) => {
    test(`send ${element.id} => return ${element.channel}`, () => {
      expect(checkChannel(element.id)).toMatch(element.channel)
    })
  })
})
