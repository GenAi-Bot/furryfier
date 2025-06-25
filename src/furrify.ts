import { FurryfierConfig } from './interfaces'
import { defaultFurryfierConfig } from './defaultFurryfierConfig'

function randomInt(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function getRandomSlang(config: FurryfierConfig): string {
  const weights = config.slangs
  const total = Object.values(weights).reduce((a, b) => a + b, 0)
  let roll = randomInt(1, total)
  for (const slang in weights) {
    roll -= weights[slang]
    if (roll <= 0) return slang
  }
  return ''
}

function getInsertCount(duplicationChance: number): number {
  let count = 1
  while (randomInt(1, 100) <= duplicationChance) {
    count++
  }
  return count
}

function handleEnd(sb: string[], config: FurryfierConfig) {
  if (randomInt(1, 100) > config.endChance) return
  const count = getInsertCount(config.endDuplicationChance)
  for (let i = 0; i < count; i++) {
    sb.push(' ' + getRandomSlang(config))
  }
}

function handleStart(sb: string[], config: FurryfierConfig) {
  if (randomInt(1, 100) > config.startChance) return
  const count = getInsertCount(config.startDuplicationChance)
  for (let i = 0; i < count; i++) {
    sb.unshift(getRandomSlang(config) + ' ')
  }
}

function handleBetweenSentences(input: string, config: FurryfierConfig): string {
  const parts = input.split(/(?<=[.!?])/)
  const sb: string[] = []
  for (const part of parts) {
    sb.push(part)
    if (!/[.!?]$/.test(part)) continue

    if (randomInt(1, 100) > config.betweenSentenceChance) continue

    const count = getInsertCount(config.betweenSentenceDuplicationChance)
    for (let i = 0; i < count; i++) {
      sb.push(' ', getRandomSlang(config))
    }
  }
  return sb.join('')
}

function handleText(input: string, config: FurryfierConfig): string {
  const sb: string[] = []
  for (const ch of input) {
    const rule = config.letters[ch]
    if (rule && randomInt(1, 100) <= rule.chance) {
      sb.push(rule.replacement)
      continue
    }
    sb.push(ch)
  }
  return sb.join('')
}

/**
 * Furrify text so uwu ^~^
 * @param input Original string to furrify
 * @param config Config of furrify, which includes chances and slang/letter dictionary
 * @returns Furrified string
 */
export function furrify(input: string, config: FurryfierConfig = defaultFurryfierConfig): string {
  let text = handleText(input, config)
  text = handleBetweenSentences(text, config)

  const builder: string[] = []

  handleStart(builder, config)
  builder.push(text)
  handleEnd(builder, config)

  return builder.join('')
}