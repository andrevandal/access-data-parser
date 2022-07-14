export default (keysMap:any, obj:any) =>
Object.keys(obj).reduce(
  (acc, key) => ({
    ...acc,
    ...{ [keysMap[key] || key]: obj[key] }
  }),
  {}
)
