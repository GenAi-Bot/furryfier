import {ProtectedPatternsConfig} from "./interfaces";

export type ProtectedPart = { placeholder: string; original: string };

export function protectText(input: string, config: ProtectedPatternsConfig): {
    protectedText: string;
    protectedParts: ProtectedPart[];
} {
    const protectedParts: ProtectedPart[] = [];
    let index = 0;

    const patterns = [...config.protectedPatterns];

    if (config.enableDiscordMode && config.discordProtectedPatterns) {
        patterns.push(...config.discordProtectedPatterns);
    }

    const fullPattern = new RegExp(patterns.map(r => r.source).join('|'), 'g');

    const protectedText = input.replace(fullPattern, (match) => {
        const placeholder = "ඞ".repeat(index + 1);
        protectedParts.push({ placeholder, original: match });
        index++;
        return placeholder;
    });

    return { protectedText, protectedParts };
}

export function restoreProtectedText(text: string, protectedParts: ProtectedPart[]): string {
    for (const part of protectedParts) {
        text = text.replace(part.placeholder, part.original);
    }
    return text;
}
