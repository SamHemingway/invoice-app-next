export default function internationaliseDate(date, intlCode = "en-GB") {
  const dateObj = new Date(date);

  return new Intl.DateTimeFormat(intlCode).format(dateObj);
}
