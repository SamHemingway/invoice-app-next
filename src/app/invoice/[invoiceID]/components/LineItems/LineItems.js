"use client";
import React from "react";
import PropTypes from "prop-types";
import {
  table,
  row,
  summary,
  strong,
  total,
  tableHeader,
  amountDue,
  quantityColumn,
  priceColumn,
} from "./LineItems.css.ts";
import internationaliseCurrency from "@/helpers/internationaliseCurrency.js";

import useMediaQuery from "@/hooks/useMediaQuery.js";

function LineItems({ data }) {
  const mobileViewport = useMediaQuery("(max-width: 600px)");

  return (
    <table className={table}>
      <thead>
        <tr className={tableHeader}>
          <th>Item</th>
          <th className={quantityColumn}>QTY.</th>
          <th className={priceColumn}>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {data.items.map((item, index) => (
          <tr
            key={index}
            className={row}
          >
            <td>
              {mobileViewport ? (
                <>
                  <p className={strong}>{item.name}</p>
                  <p>
                    {item.quantity} x {internationaliseCurrency(item.price)}
                  </p>
                </>
              ) : (
                <p className={strong}>{item.name}</p>
              )}
            </td>
            {!mobileViewport && (
              <>
                <td className={quantityColumn}>
                  <p>{item.quantity}</p>
                </td>
                <td className={priceColumn}>
                  {internationaliseCurrency(item.price)}
                </td>
              </>
            )}

            <td className={strong}>{internationaliseCurrency(item.total)}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className={summary}>
          <td
            colSpan="3"
            className={amountDue}
          >
            Amount Due
          </td>
          <td className={total}>{internationaliseCurrency(data.total)}</td>
        </tr>
      </tfoot>
    </table>
  );
}

LineItems.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LineItems;
