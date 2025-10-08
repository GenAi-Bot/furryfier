export interface SlangsWithChances {
  /** Chance of slang appearance */
  [key: string]: number
}

export interface ReplacementWithChance {
  /** Replacement of origin letter */
  replacement: string
  /** Chance of replacement */
  chance: number
}

export interface LetterReplacements {
  /** Letter replacement config */
  [key: string]: ReplacementWithChance
}

export interface ProtectedPatternsConfig {
  /** List of protected patterns */
  protectedPatterns: RegExp[]
  /** Enable discord protection mode */
  enableDiscordMode: boolean
  /** Discord-specific protection patterns */
  discordProtectedPatterns: RegExp[]
}

export interface FurryfierConfig {
  /** Protection config */
  protection: ProtectedPatternsConfig

  /** Chance of adding random slang to start of text */
  startChance: number
  /** Maximum count of slangs to add at start of text */
  startDuplicationChance: number
  /** Chance of adding random slang at end of text */
  endChance: number
  /** Maximum count of slangs to add at end of text */
  endDuplicationChance: number
  /** Chance of adding random slang between sentences (detected by [.!?]) */
  betweenSentenceChance: number
  /** Maximum count of slangs between sentences (detected by [.!?]) */
  betweenSentenceDuplicationChance: number

  /** Map of slangs and their chances */
  slangs: SlangsWithChances
  /** Map of replaceable letters, their replacement and chance */
  letters: LetterReplacements
}