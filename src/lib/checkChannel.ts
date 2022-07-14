import mediumTypes from '@/configs/mediumTypes.js'

export default (medium: string) => {
  const findType = mediumTypes.find((type) => type.id === medium)
  return findType ? findType.channel : medium
}
