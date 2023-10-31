import { wrapper } from "./page.css.ts";
import getInvoice from "@/helpers/getInvoice";
import NavLink from "./components/NavLink/index.tsx";
import InvoiceOverview from "./components/InvoiceOverview/index.tsx";
import InvoiceDetails from "./components/InvoiceDetails/index.tsx";

export async function generateMetadata({ params }) {
  return {
    title: `Invoice #${params.invoiceID}`,
  };
}

export default function page({ params }) {
  const data = getInvoice(params.invoiceID);

  return (
    <section className={wrapper}>
      <NavLink>Go back</NavLink>
      <InvoiceOverview data={data} />
      <InvoiceDetails data={data} />
    </section>
  );
}
