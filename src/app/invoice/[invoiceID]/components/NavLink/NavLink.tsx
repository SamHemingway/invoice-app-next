"use client";

import React from "react";
import PropTypes from "prop-types";
import { wrapper, iconWrapper } from "./NavLink.css.ts";
import { useRouter } from "next/navigation";
import Icon from "@/primitives/Icon";
import { ICONS } from "@/assets/ICONS.tsx";
import { vars } from "@/styles/themes.css.ts";

function NavLink({ children }) {
  const router = useRouter();

  function handleClick() {
    router.back();
  }

  return (
    <button
      className={wrapper}
      onClick={handleClick}
    >
      <span className={iconWrapper}>
        <Icon
          label=""
          size={10}
          colour={vars.colour.primary[400]}
        >
          {ICONS.arrowLeft}
        </Icon>
      </span>
      {children}
    </button>
  );
}

NavLink.propTypes = {};

export default NavLink;
