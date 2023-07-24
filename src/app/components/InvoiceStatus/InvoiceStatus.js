import React from "react";
import PropTypes from "prop-types";
import {
  statusWrapper,
  statusCircle,
  statusCircleWrapper,
} from "./InvoiceStatus.css.ts";

export function InvoiceStatus({ status }) {
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

InvoiceStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

export default InvoiceStatus;
