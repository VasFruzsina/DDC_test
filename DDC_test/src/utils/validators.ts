export function parsePositiveNumber(raw: string): number | null {
  const n = Number(raw.replace(",", ".").trim());
  return n > 0 && Number.isFinite(n) ? n : null;
}

export function isValidBudget(v: unknown): boolean {
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) && n >= 0;
}
