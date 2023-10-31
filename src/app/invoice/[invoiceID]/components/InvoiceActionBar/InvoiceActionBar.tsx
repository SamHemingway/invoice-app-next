import React from "react";
import PropTypes from "prop-types";
import { wrapper } from "./InvoiceActionBar.css.ts";
import Button from "@/primitives/Button/";
import Link from "next/link.js";

function InvoiceActionBar({ invoiceID }) {
  return (
    <div className={wrapper}>
      <Link href={`/invoice/${invoiceID}/edit`}>
        <Button state="secondary">Edit</Button>
      </Link>
      <Button state="danger">Delete</Button>
      <Button>Mark as Paid</Button>
    </div>
  );
}

InvoiceActionBar.propTypes = {
  invoiceID: PropTypes.string.isRequired,
};

export default InvoiceActionBar;
