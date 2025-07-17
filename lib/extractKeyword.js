export function extractKeyword(title = '') {
  if (!title) return ''
  const truncated = title.split(/[:\-?!]/)[0]
  const words = truncated.trim().split(/\s+/)
  return words.slice(0, 2).join(' ')
}
