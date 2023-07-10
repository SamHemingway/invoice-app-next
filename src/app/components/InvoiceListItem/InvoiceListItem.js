import React from "react";
import PropTypes from "prop-types";
import internationaliseCurrency from "@/helpers/internationaliseCurrency.js";
import internationaliseDate from "@/helpers/internationaliseDate.js";
import {
  wrapper,
  invoiceNumber,
  clientName,
  dueDate,
  amountDue,
  statusWrapper,
  statusCircle,
  statusCircleWrapper,
  linkWrapper,
} from "./InvoiceListItem.css.ts";
import Link from "next/link.js";

function InvoiceListItem({ data }) {
  const totalDue = internationaliseCurrency(data.total);
  const date = internationaliseDate(data.paymentDue);

  return (
    <Link
      href={`/invoice/${data.id}`}
      className={linkWrapper}
    >
      <article
        key={data.id}
        className={wrapper}
      >
        <h3 className={invoiceNumber}>{data.id}</h3>
        <p className={clientName}>{data.clientName}</p>

        <p className={dueDate}>Due {date}</p>
        <p className={amountDue}>{totalDue}</p>

        <InvoiceStatus status={data.status} />
      </article>
    </Link>
  );
}

InvoiceListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

function InvoiceStatus({ status }) {
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

export default InvoiceListItem;
