import React from "react";
import { button } from "./Button.css.ts";

import IconCircle from "../IconCircle";
import { ICONS } from "@/assets/ICONS.jsx";

function Button({
  variant = "fill",
  state = "primary",
  icon,
  iconLocation,
  roundIcon,
  children,
  ...delegated
}) {
  const IconEl = ICONS[icon];

  function buildIconStyle(location, isRound) {
    if (location === "left") {
      return isRound ? "leftRound" : "left";
    }

    if (location === "right") {
      return isRound ? "rightRound" : "right";
    }
  }

  const iconStyle = buildIconStyle(iconLocation, roundIcon);

  return (
    <button
      {...delegated}
      className={button({
        type: variant,
        icon: iconStyle,
        color: state,
      })}
    >
      {roundIcon && (
        <IconCircle
          icon={icon}
          size={32}
        />
      )}
      {!roundIcon && IconEl}
      {children}
    </button>
  );
}

export default Button;
