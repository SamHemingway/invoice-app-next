import React from "react";
import PropTypes from "prop-types";
import Button from "@/primitives/Button";
import Popover from "@/primitives/Popover";
import {} from "./DropdownButton.css.ts";

function DropdownButton({ variant, buttonText, children }) {
  const trigger = (
    <Button
      icon="arrowDown"
      iconLocation="right"
      variant={variant}
    >
      {buttonText}
    </Button>
  );

  return (
    <Popover
      trigger={trigger}
      label={buttonText}
    >
      {children}
    </Popover>
  );
}

DropdownButton.propTypes = {
  variant: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default DropdownButton;
