const removeEmpty = obj =>
  Object.keys(obj)
    .filter(k => obj[k] != null) // Remove undef. and null.
    .reduce(
      (newObj, k) =>
        typeof obj[k] === 'object'
          ? { ...newObj, [k]: removeEmpty(obj[k]) } // Recurse.
          : { ...newObj, [k]: obj[k] }, // Copy value.
      {}
    )

module.exports = removeEmpty
