import React from "react";
import Logo from "@/components/Logo";
import ThemeSelect from "../ThemeSelect/ThemeSelect";
import AvatarHeader from "../AvatarHeader/AvatarHeader";

import { wrapper, logoWrapper } from "./Header.css";

function Header() {
  return (
    <header className={wrapper}>
      <a
        href="/"
        className={logoWrapper}
      >
        <Logo label="return to invoices overview" />
      </a>
      <ThemeSelect />
      <AvatarHeader />
    </header>
  );
}

export default Header;
