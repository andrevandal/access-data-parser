const renameKeys = require('./renameKeys')
describe('renameKeys', () => {
  test('A to B', () => {
    expect(renameKeys({ A: 'B' }, { A: 'B' })).toMatchObject({ B: 'B' })
  })
  test('A to B; no change prop C', () => {
    expect(renameKeys({ A: 'B' }, { A: 'B', C: 'C' })).toMatchObject({
      B: 'B',
      C: 'C'
    })
  })
})
