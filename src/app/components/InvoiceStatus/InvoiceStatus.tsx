import React from "react";
import {
  statusWrapper,
  statusCircle,
  statusCircleWrapper,
} from "./InvoiceStatus.css.ts";
import { InvoiceStatusType } from "@/types/types.ts";

export function InvoiceStatus({ status }: { status: InvoiceStatusType }) {
  return (
    <div className={statusWrapper({ status })}>
      <svg
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg"
        className={statusCircleWrapper}
      >
        <circle
          className={statusCircle}
          cx="5"
          cy="5"
          r="5"
        />
      </svg>
      {status}
    </div>
  );
}
export default InvoiceStatus;
