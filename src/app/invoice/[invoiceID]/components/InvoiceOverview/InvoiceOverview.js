import React from "react";
import PropTypes from "prop-types";
import { wrapper } from "./InvoiceOverview.css.ts";
import InvoiceStatus from "@/app/components/InvoiceStatus/";
import InvoiceActionBar from "../InvoiceActionBar";

function InvoiceOverview({ data }) {
  return (
    <article className={wrapper}>
      <p>Status</p>
      <InvoiceStatus status={data.status} />
      <InvoiceActionBar invoiceID={data.id} />
    </article>
  );
}

InvoiceOverview.propTypes = {};

export default InvoiceOverview;
