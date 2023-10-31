import React from "react";
import { button } from "./Button.css.ts";

import IconCircle from "../IconCircle/index.tsx";
import { ICONS, IconsTypes } from "@/assets/ICONS.tsx";

type ButtonTypes = {
  variant?: "fill" | "ghost";
  state?: "primary" | "secondary" | "danger";
  icon: IconsTypes;
  iconLocation?: "left" | "right";
  roundIcon?: boolean;
  children: JSX.Element;
};

function Button({
  variant = "fill",
  state = "primary",
  icon,
  iconLocation,
  roundIcon,
  children,
  ...delegated
}: ButtonTypes) {
  const IconEl = ICONS[icon];

  function buildIconStyle(
    location: "left" | "right" | undefined,
    isRound: boolean | undefined
  ) {
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
