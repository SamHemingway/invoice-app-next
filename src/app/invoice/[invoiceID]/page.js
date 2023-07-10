import getInvoice from "@/helpers/getInvoice";

export default function InvoiceOverview({ params }) {
  const data = getInvoice(params.invoiceID);

  return <p>Heres a route</p>;
}
