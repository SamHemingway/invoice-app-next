"use client";
import React from "react";
import {
  input,
  optionWrapper,
  formWrapper,
  label,
} from "./FilterOptions.css.ts";

const initialOptions: Record<string, boolean> = {
  draft: true,
  pending: true,
  paid: true,
};

function FilterOptions() {
  const [filters, setFilters] = React.useState(initialOptions);

  const filterKeys = Object.keys(initialOptions);

  return (
    <form className={formWrapper}>
      {filterKeys.map((option) => (
        <div
          key={option}
          className={optionWrapper}
        >
          <input
            className={input}
            type="checkbox"
            id={option}
            value={option}
            checked={filters[option]}
            onChange={(event) => {
              setFilters({
                ...filters,
                [option]: event.target.checked,
              });
            }}
          />
          <label
            htmlFor={option}
            className={label}
          >
            {option}
          </label>
        </div>
      ))}
    </form>
  );
}

export default FilterOptions;
