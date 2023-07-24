"use client";

import {
  wrapper,
  formWrapper,
  sectionHeader,
  sectionWrapper,
} from "./page.css.ts";

import { Formik, Form } from "formik";
import NavLink from "../components/NavLink";
import getInvoice from "@/helpers/getInvoice.js";
import InvoiceNumber from "@/app/components/InvoiceNumber/";
import TextInput from "@/primitives/TextInput";
import React from "react";
import DatePicker from "@/primitives/DatePicker";
import internationaliseDate from "@/helpers/internationaliseDate.js";

export default function Page({ params }) {
  const invoice = getInvoice(params.invoiceID);

  const initialFormValues = {
    senderStreet: invoice.senderAddress.street,
    senderCity: invoice.senderAddress.city,
    senderPostCode: invoice.senderAddress.postCode,
    senderCountry: invoice.senderAddress.country,
    clientName: invoice.clientName,
    clientEmail: invoice.clientEmail,
    clientStreet: invoice.clientAddress.street,
    clientCity: invoice.clientAddress.city,
    clientPostCode: invoice.clientAddress.postCode,
    clientCountry: invoice.clientAddress.country,
    createdAt: invoice.createdAt,
  };

  return (
    <section className={wrapper}>
      <NavLink>Go back</NavLink>
      <h1>
        Edit <InvoiceNumber as="span">{invoice.id}</InvoiceNumber>
      </h1>
      <Formik
        initialValues={initialFormValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <Form className={formWrapper}>
            <h2 className={sectionHeader}>Bill From</h2>
            <div className={sectionWrapper}>
              <TextInput
                label="Street Address"
                name="senderStreet"
                onChange={props.handleChange}
                value={props.values.senderStreet}
                fullLine
              />
              <TextInput
                label="City"
                name="senderCity"
                onChange={props.handleChange}
                value={props.values.senderCity}
              />
              <TextInput
                label="Post Code"
                name="senderPostCode"
                onChange={props.handleChange}
                value={props.values.senderPostCode}
              />
              <TextInput
                label="Country"
                name="senderCountry"
                onChange={props.handleChange}
                value={props.values.senderCountry}
              />
            </div>
            <h2 className={sectionHeader}>Bill To</h2>
            <TextInput
              label="Client's name"
              name="clientName"
              onChange={props.handleChange}
              value={props.values.clientName}
              fullLine
            />
            <TextInput
              label="Client's email"
              name="clientEmail"
              onChange={props.handleChange}
              value={props.values.clientEmail}
              fullLine
            />
            <div className={sectionWrapper}>
              <TextInput
                label="Street Address"
                name="clientStreet"
                onChange={props.handleChange}
                value={props.values.clientStreet}
                fullLine
              />
              <TextInput
                label="City"
                name="clientCity"
                onChange={props.handleChange}
                value={props.values.clientCity}
              />
              <TextInput
                label="Post Code"
                name="clientPostCode"
                onChange={props.handleChange}
                value={props.values.clientPostCode}
              />
              <TextInput
                label="Country"
                name="clientCountry"
                onChange={props.handleChange}
                value={props.values.clientCountry}
              />
            </div>
            <DatePicker
              name="createdAt"
              label="Invoice Date"
              onChange={props.handleChange}
              selected={props.values.createdAt}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </section>
  );
}
