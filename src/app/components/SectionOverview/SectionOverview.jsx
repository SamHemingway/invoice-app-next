"use client";
import React from "react";
import {
  wrapper,
  headingWrapper,
  heading,
  subheading,
} from "./SectionOverview.css.ts";
import DropdownButton from "@/app/components/DropdownButton";
import Button from "@/primitives/Button/Button";
import useIsViewportLowerThan from "@/hooks/useIsViewportLowerThan.js";
import FilterOptions from "@/app/components/FilterOptions";

function SectionOverview() {
  const mobileViewport = useIsViewportLowerThan(900);

  return (
    <section className={wrapper}>
      <div className={headingWrapper}>
        <h1 className={heading}>Invoices</h1>
        <h2 className={subheading}>7 invoices</h2>
      </div>
      <DropdownButton
        variant="ghost"
        buttonText={mobileViewport ? "Filter" : "Filter by status"}
      >
        <FilterOptions />
      </DropdownButton>
      <Button
        icon="plus"
        roundIcon
        iconLocation="left"
      >
        {mobileViewport ? "New" : "New Invoice"}
      </Button>
    </section>
  );
}

export default SectionOverview;
