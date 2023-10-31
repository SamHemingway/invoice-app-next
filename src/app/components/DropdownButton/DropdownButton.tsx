import React from "react";
import Button from "@/primitives/Button";
import Popover from "@/primitives/Popover";
import {} from "./DropdownButton.css.ts";

type DropdownButtonTypes = {
  variant?: "fill" | "ghost";
  buttonText: string;
  children: JSX.Element;
};

function DropdownButton({
  variant = "fill",
  buttonText,
  children,
}: DropdownButtonTypes) {
  const trigger = (
    <Button
      icon="arrowDown"
      iconLocation="right"
      variant={variant}
    >
      <>{buttonText}</>
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

export default DropdownButton;
