import React from "react";
import PropTypes from "prop-types";
import internationaliseCurrency from "@/helpers/internationaliseCurrency.js";
import internationaliseDate from "@/helpers/internationaliseDate.js";
import {
  wrapper,
  clientName,
  dueDate,
  amountDue,
  linkWrapper,
} from "./InvoiceListItem.css.ts";
import Link from "next/link.js";
import InvoiceStatus from "../InvoiceStatus";
import InvoiceNumber from "../InvoiceNumber";

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
        <InvoiceNumber as="h3">{data.id}</InvoiceNumber>
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

export default InvoiceListItem;
