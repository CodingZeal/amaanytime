export const displayName = (user) => user.nickname || user.name || user.username

const colors = [
  'punch',
  'onyx',
  'pesto',
  'fiord',
  'veridianGreen',
  'heatWave',
  'gray',
]

export const nameColor = (name) => {
  const letterAPosition = 97
  const letterNumber = name.toLowerCase().charCodeAt(0) - letterAPosition
  return colors[letterNumber % colors.length]
}
