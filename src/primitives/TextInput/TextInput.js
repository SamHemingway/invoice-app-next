import React from "react";
import PropTypes from "prop-types";
import { wrapper, inputLabel, input, iconEl } from "./TextInput.css.ts";
import Icon from "../Icon/Icon.jsx";

function TextInput({
  label,
  fullLine = false,
  icon,
  disabled = false,
  ...delegated
}) {
  const id = React.useId();
  return (
    <div
      className={wrapper}
      style={{
        flexBasis: fullLine ? "100%" : null,
        minInlineSize: fullLine ? "revert" : null,
      }}
    >
      <label
        htmlFor={id}
        className={inputLabel}
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        className={input}
        disabled={disabled}
        style={{
          cursor: icon && "pointer",
          userSelect: icon && "none",
        }}
        {...delegated}
      />
      {icon && <Icon className={iconEl}>{icon}</Icon>}
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  fullLine: PropTypes.bool,
  icon: PropTypes.node,
};

export default TextInput;
