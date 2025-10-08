import { ProtectedPatternsConfig } from './interfaces'

export interface ProtectedPart {
  placeholder: string
  original: string
}

export interface ProtectedTextResult {
  protectedText: string
  protectedParts: ProtectedPart[]
}

export function protectText(input: string, config: ProtectedPatternsConfig): ProtectedTextResult {
  const protectedParts: ProtectedPart[] = []
  let index = 0

  const patterns = [...config.protectedPatterns]

  if (config.enableDiscordMode && config.discordProtectedPatterns) {
    patterns.push(...config.discordProtectedPatterns)
  }

  const fullPattern = new RegExp(patterns.map(r => r.source).join('|'), 'g')

  const protectedText = input.replace(fullPattern, (match) => {
    const placeholder = "ඞ".repeat(index + 1)
    protectedParts.push({ placeholder, original: match })
    index++
    return placeholder
  });

  return { protectedText, protectedParts }
}

export function restoreProtectedText(text: string, protectedParts: ProtectedPart[]): string {
  for (const part of protectedParts) {
    text = text.replace(part.placeholder, part.original)
  }
  return text
}
