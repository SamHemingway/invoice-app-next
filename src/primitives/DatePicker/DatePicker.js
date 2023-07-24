import React from "react";
import { DayPicker, useInput } from "react-day-picker";
import { ICONS } from "@/assets/ICONS.jsx";
import Popover from "@/primitives/Popover";
import TextInput from "@/primitives/TextInput";
import "react-day-picker/dist/style.css";
import { selectedDay, day } from "./DatePicker.css.ts";

const calendarIcon = ICONS.calendar;

function DatePicker({ label, onChange, selected, ...delegated }) {
  const { inputProps, dayPickerProps } = useInput({
    format: "do MMM yyyy",
    required: true,
    defaultSelected: new Date(selected),
  });

  const pickerTrigger = (
    <TextInput
      label={label}
      icon={calendarIcon}
      style={{ paddingBlock: 24 }}
      {...inputProps}
    />
  );

  return (
    <Popover trigger={pickerTrigger} label="Choose a date">
      <DayPicker
        {...delegated}
        mode="single"
        hideHead
        showOutsideDays
        onDayClick={onChange}
        selected={selected}
        modifiersClassNames={{
          selected: selectedDay,
        }}
        {...dayPickerProps}
        style={{
          paddingBlock: 0,
          margin: 0,
        }}
        classNames={{
          day: day,
        }}
      />
    </Popover>
  );
}

DatePicker.propTypes = {};

export default DatePicker;
