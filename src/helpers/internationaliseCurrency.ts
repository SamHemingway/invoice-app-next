export default function internationaliseCurrency(
  number: number,
  intlCode: string = "en-GB",
  currency: string = "GBP"
): string {
  return new Intl.NumberFormat(intlCode, {
    style: "currency",
    currency: currency,
  }).format(number);
}
