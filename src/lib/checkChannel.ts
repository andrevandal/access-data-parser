import mediumTypes from '@/configs/mediumTypes'

export default (medium: string) => {
  const findType = mediumTypes.find(type => type.id === medium)
  return findType ? findType.channel : medium
}
