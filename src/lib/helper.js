export function convertToSubcurrency(amount, factor = 100) {
  return Math.round(amount * factor);
}

export function formatNumber(number) {
  return new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
}