export default function internationaliseDate(
  date,
  style = "short",
  intlCode = "en-GB"
) {
  const dateObj = new Date(date);

  if (style === "medium")
    return new Intl.DateTimeFormat(intlCode, { dateStyle: "medium" }).format(
      dateObj
    );

  return new Intl.DateTimeFormat(intlCode).format(dateObj);
}
