const mediumTypes = require('../configs/mediumTypes')

module.exports = medium => {
  const findType = mediumTypes.find(type => type.id === medium)
  return findType ? findType.channel : medium
}
