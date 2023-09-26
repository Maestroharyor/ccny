export function generateRandomCode(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let code = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    code += characters.charAt(randomIndex)
  }

  return code
}

export function capitalizeFirstCharacter(str: string): string {
  if (!str) return str || ''
  return str[0].toUpperCase() + str.slice(1)
}
