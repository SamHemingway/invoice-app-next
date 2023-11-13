import React from "react";
import PropTypes from "prop-types";
import { wrapper } from "./InvoiceList.css.ts";
import data from "@/assets/data.json";
import InvoiceListItem from "../InvoiceListItem";

function InvoiceList() {
  return (
    <section className={wrapper}>
      {data.map((invoice) => {
        return (
          <InvoiceListItem
            data={invoice}
            key={invoice.id}
          />
        );
      })}
    </section>
  );
}

InvoiceList.propTypes = {};

export default InvoiceList;
