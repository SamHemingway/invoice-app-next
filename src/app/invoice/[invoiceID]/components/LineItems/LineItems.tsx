"use client";
import React from "react";
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
import internationaliseCurrency from "@/helpers/internationaliseCurrency.ts";

import useMediaQuery from "@/hooks/useMediaQuery.ts";

import { InvoiceType } from "@/types/types.ts";

function LineItems({ data }: { data: InvoiceType }) {
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
            colSpan={3}
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

export default LineItems;
