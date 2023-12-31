import React from "react";
import internationaliseDate from "@/helpers/internationaliseDate.ts";
import LineItems from "../LineItems";
import InvoiceNumber from "@/app/components/InvoiceNumber";

import {
  wrapper,
  mainDetails,
  extraDetails,
  address,
  dataSectionTitle,
  dataSectionWrapper,
} from "./InvoiceDetails.css.ts";

import { InvoiceType } from "@/types/types.ts";

type InvoiceDetailsType = {
  data: InvoiceType;
};

function InvoiceDetails({ data }: InvoiceDetailsType) {
  return (
    <article className={wrapper}>
      <div className={mainDetails}>
        <div>
          <InvoiceNumber>{data.id}</InvoiceNumber>
          <p>{data.description}</p>
        </div>
        <div className={address}>
          <p>{data.senderAddress.street}</p>
          <p>{data.senderAddress.city}</p>
          <p>{data.senderAddress.postCode}</p>
          <p>{data.senderAddress.country}</p>
        </div>
      </div>
      <div className={extraDetails}>
        <div className={dataSectionWrapper}>
          <DataSection title="Invoice Date">
            {internationaliseDate(data.createdAt, "medium")}
          </DataSection>
          <DataSection title="Payment Due">
            {internationaliseDate(data.paymentDue, "medium")}
          </DataSection>
        </div>
        <div className={dataSectionWrapper}>
          <DataSection title="Bill To">
            <strong>{data.clientName}</strong>
            <p>{data.clientAddress.street}</p>
            <p>{data.clientAddress.city}</p>
            <p>{data.clientAddress.postCode}</p>
            <p>{data.clientAddress.country}</p>
          </DataSection>
        </div>
        <DataSection title="Sent to">
          <p>{data.clientEmail}</p>
        </DataSection>
      </div>
      <LineItems data={data} />
    </article>
  );
}

function DataSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className={dataSectionTitle}>{title}</h2>
      {children}
    </div>
  );
}

export default InvoiceDetails;
