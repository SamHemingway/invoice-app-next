import React from "react";
import PropTypes from "prop-types";
import { wrapper } from "./InvoiceNumber.css.ts";

function InvoiceNumber({ as: Element = "h1", children, ...delegated }) {
  return (
    <Element
      className={wrapper}
      {...delegated}
    >
      {children}
    </Element>
  );
}

InvoiceNumber.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
};

export default InvoiceNumber;
