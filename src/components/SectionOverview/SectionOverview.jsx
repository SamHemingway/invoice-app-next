"use client";
import React from "react";
import {
  wrapper,
  headingWrapper,
  heading,
  subheading,
} from "./SectionOverview.css.ts";
import Button from "../primitives/Button/Button";
import useIsMobileViewport from "@/hooks/useIsMobileViewport.js";

function SectionOverview() {
  const mobileViewport = useIsMobileViewport();

  return (
    <section className={wrapper}>
      <div className={headingWrapper}>
        <h1 className={heading}>Invoices</h1>
        <h2 className={subheading}>7 invoices</h2>
      </div>
      <Button
        icon="arrowDown"
        iconLocation="right"
        variant="ghost"
      >
        {mobileViewport ? "Filter" : "Filter by status"}
      </Button>
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
