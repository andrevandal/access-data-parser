interface AnyObject {
  [key: string]: string
}

function pickBy(object: AnyObject) {
  return Object.keys(object).reduce((previousValue, key) => {
    // eslint-disable-next-line no-param-reassign
    previousValue[key] = object[key]
    return previousValue
  }, {} as any)
}

export default pickBy
