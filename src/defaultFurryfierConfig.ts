import { FurryfierConfig } from './interfaces'

export const defaultFurryfierConfig: FurryfierConfig = {
  protection: {
    protectedPatterns: [
      /https?:\/\/\S+/g,
    ],
    enableDiscordMode: true,
    discordProtectedPatterns: [
      /<[^>]*>/g
    ],
  },
  startChance: 40,
  startDuplicationChance: 10,
  endChance: 30,
  endDuplicationChance: 30,
  betweenSentenceChance: 30,
  betweenSentenceDuplicationChance: 5,
  slangs: {
    'uwu': 30, 'UwU': 30, 'UWU': 30,
    'owo': 30, 'OwO': 30, 'OWO': 30,
    '=w=': 30, '=W=': 30,
    'rawr': 20, 'Rawr': 20, 'RAWR': 20,
    'nyaa': 5, 'NyaA': 5, 'NYAA': 5,
    'nyan': 5, 'Nyan': 5, 'NYAN': 5,
    'nya~': 5, 'nya': 5, 'nyaa~': 5, 'nya~!': 5,
    '~~~': 10,
    '*purr*': 30, '*nuzzles*': 30, '*blushes*': 30, '*hugs*': 10, '*sniff*': 10,
    '*boops*': 30, '*squee*': 30, '*fluff*': 30,
    '*giggles*': 10, '*snuggles*': 20, '*notices you*': 20,
    'hewo': 1, 'hewwo': 1, 'H-hewwo!': 10,
    'b-baka': 5, 'tehe': 5,
    'mew': 10, 'mewmew': 10, 'mrowr': 15,
    'x3': 50, '>w<': 50, '^w^': 50, ':3': 50,
    'rawr x3': 10, 'rawr >w<': 10, 'rawr ^w^': 10, 'rawr :3': 10,
    'blep': 25
  },
  letters: {
    'r': { replacement: 'w', chance: 20 },
    'l': { replacement: 'w', chance: 20 },
    'R': { replacement: 'W', chance: 20 },
    'L': { replacement: 'W', chance: 20 },
    'n': { replacement: 'ny', chance: 20 },
    'N': { replacement: 'Ny', chance: 20 },
    'a': { replacement: 'aw', chance: 10 },
    'A': { replacement: 'Aw', chance: 10 },
    't': { replacement: 'tw', chance: 10 },
    'T': { replacement: 'Tw', chance: 10 },
    's': { replacement: 'z', chance: 20 },
    'S': { replacement: 'Z', chance: 20 },
    'р': { replacement: 'в', chance: 20 },
    'Р': { replacement: 'В', chance: 20 },
    'л': { replacement: 'в', chance: 20 },
    'Л': { replacement: 'В', chance: 20 },
    '0': { replacement: 'o', chance: 30 },
  }
}
