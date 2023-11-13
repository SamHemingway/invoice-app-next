import React from "react";
import { wrapper } from "./InvoiceNumber.css.ts";

type InvoiceNumberType = {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
};

function InvoiceNumber({
  as: Element = "h1",
  children,
  ...delegated
}: InvoiceNumberType) {
  return (
    <Element
      className={wrapper}
      {...delegated}
    >
      {children}
    </Element>
  );
}

export default InvoiceNumber;
