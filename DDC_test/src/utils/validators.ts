export const parsePositiveNumber = (raw: string): number | null => {
  const s = raw.replace(',', '.').trim();
  if (s === '') return null;
  const n = Number(s);
  return Number.isFinite(n) && n > 0 ? n : null;
};

export const isValidBudget = (v: unknown): boolean => {
  const n = typeof v === 'number' ? v : Number(v as any);
  return Number.isFinite(n) && n >= 0;
};
