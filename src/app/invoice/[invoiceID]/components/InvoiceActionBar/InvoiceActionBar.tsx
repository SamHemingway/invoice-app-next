import React from "react";
import { wrapper } from "./InvoiceActionBar.css.ts";
import Button from "@/primitives/Button/";
import Link from "next/link.js";
import { InvoiceIDType } from "@/types/types.ts";
function InvoiceActionBar({ id }: { id: InvoiceIDType }) {
  return (
    <div className={wrapper}>
      <Link href={`/invoice/${id}/edit`}>
        <Button state="secondary">Edit</Button>
      </Link>
      <Button state="danger">Delete</Button>
      <Button>Mark as Paid</Button>
    </div>
  );
}

export default InvoiceActionBar;
