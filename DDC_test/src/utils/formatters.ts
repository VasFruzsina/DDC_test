export const DateTimeFormat = (value: string | Date): string => {
  if (!value) return '';
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('hu-HU');
};

export const CurrencyFormat = (value: number | null | undefined): string => {
  if (value == null || !Number.isFinite(Number(value))) return '';
  return value.toLocaleString('hu-HU', { style: 'currency', currency: 'HUF', maximumFractionDigits: 0 });
};
