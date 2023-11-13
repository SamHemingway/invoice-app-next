import React from "react";
import PropTypes from "prop-types";
import { wrapper } from "./Popover.css.ts";
import * as Primitive from "@radix-ui/react-popover";

type PopoverTypes = {
  trigger: React.ReactNode;
  label: string;
  children: React.ReactNode;
};

function Popover({ trigger, label, children }: PopoverTypes) {
  return (
    <Primitive.Root>
      <Primitive.Anchor>
        <Primitive.Trigger
          asChild
          aria-label={label}
        >
          {trigger}
        </Primitive.Trigger>
      </Primitive.Anchor>
      <Primitive.Portal>
        <Primitive.Content className={wrapper}>{children}</Primitive.Content>
      </Primitive.Portal>
    </Primitive.Root>
  );
}

Popover.propTypes = {
  trigger: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Popover;
