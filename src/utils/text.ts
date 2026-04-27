export const quoteLines = (quote: string): string[] =>
  quote
    .replace(/\/n/g, "\n")
    .trim()
    .split(/\r?\n/g)
    .map((line) => line.trim())
    .filter(Boolean);
