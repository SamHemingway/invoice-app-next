import React from "react";
import Logo from "@/app/components/Logo";
import ThemeSelect from "../ThemeSelect/ThemeSelect";
import AvatarHeader from "../AvatarHeader/AvatarHeader";
import Link from "next/link";

import { wrapper, logoWrapper } from "./Header.css";

function Header() {
  return (
    <header className={wrapper}>
      <Link
        href="/"
        className={logoWrapper}
      >
        <Logo label="return to invoices overview" />
      </Link>
      <ThemeSelect />
      <AvatarHeader />
    </header>
  );
}

export default Header;
