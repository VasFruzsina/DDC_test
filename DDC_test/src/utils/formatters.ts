function safeFormat<T>(
  value: T | null | undefined,
  fn: (v: T) => string
): string {
  if (value == null) return "";
  return fn(value);
}

export const formatDate = (value: string | Date) =>
  safeFormat(value, (v) => new Date(v).toLocaleDateString("hu-HU"));

export const formatCurrency = (value: number) =>
  safeFormat(value, (v) =>
    v.toLocaleString("hu-HU", {
      style: "currency",
      currency: "HUF",
      maximumFractionDigits: 0,
    })
  );
