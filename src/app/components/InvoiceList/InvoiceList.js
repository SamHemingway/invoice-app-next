import React from "react";
import PropTypes from "prop-types";
import { wrapper } from "./InvoiceList.css.ts";
import data from "@/assets/data.json";
import InvoiceListItem from "../InvoiceListItem/InvoiceListItem.js";

function InvoiceList() {
  return (
    <section className={wrapper}>
      {data.map((invoice) => {
        return (
          <InvoiceListItem
            data={invoice}
            key={data.id}
          />
        );
      })}
    </section>
  );
}

InvoiceList.propTypes = {};

export default InvoiceList;
