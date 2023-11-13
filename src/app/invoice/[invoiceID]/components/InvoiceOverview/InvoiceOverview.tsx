import React from "react";
import { wrapper } from "./InvoiceOverview.css.ts";
import InvoiceStatus from "@/app/components/InvoiceStatus/";
import InvoiceActionBar from "../InvoiceActionBar/index.tsx";

import { InvoiceType } from "@/types/types.ts";

function InvoiceOverview({ data }: { data: InvoiceType }) {
  return (
    <article className={wrapper}>
      <p>Status</p>
      <InvoiceStatus status={data.status} />
      <InvoiceActionBar id={data.id} />
    </article>
  );
}

export default InvoiceOverview;
