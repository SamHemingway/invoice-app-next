export default function internationaliseDate(
  date: string,
  style: string = "short",
  intlCode: string = "en-GB"
) {
  const dateObj = new Date(date);

  if (style === "medium")
    return new Intl.DateTimeFormat(intlCode, { dateStyle: "medium" }).format(
      dateObj
    );

  return new Intl.DateTimeFormat(intlCode).format(dateObj);
}
