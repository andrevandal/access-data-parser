const removeEmpty = require('./removeEmpty')
describe('removeEmpty props', () => {
  test('mantain a, delete b', () => {
    expect(removeEmpty({ a: 'a', b: '' })).toMatchObject({
      a: 'a'
    })
  })
  test('sub object', () => {
    expect(
      removeEmpty({
        a: 'a',
        b: {
          a: 'a',
          b: ''
        }
      })
    ).toMatchObject({
      a: 'a'
    })
  })
})
