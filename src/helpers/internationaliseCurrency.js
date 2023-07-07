export default function internationaliseCurrency(
  number,
  intlCode = "en-GB",
  currency = "GBP"
) {
  return new Intl.NumberFormat(intlCode, {
    style: "currency",
    currency: currency,
  }).format(number);
}
