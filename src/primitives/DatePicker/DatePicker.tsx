import React from "react";
import {
  DayPicker,
  useInput,
  DayClickEventHandler,
  DayPickerSingleProps,
} from "react-day-picker";
import { ICONS } from "@/assets/ICONS.tsx";
import Popover from "@/primitives/Popover";
import TextInput from "@/primitives/TextInput";
import "react-day-picker/dist/style.css";
import { selectedDay, day } from "./DatePicker.css.ts";

const calendarIcon = ICONS.calendar;

type BaseTypes = {
  label: string;
  onChange: DayClickEventHandler;
};

type DatePickerTypes = BaseTypes & DayPickerSingleProps;

function DatePicker({
  label,
  onChange,
  selected,
  ...delegated
}: DatePickerTypes) {
  const { inputProps, dayPickerProps } = useInput({
    format: "do MMM yyyy",
    required: true,
    defaultSelected: new Date(),
  });

  console.log(delegated);

  const pickerTrigger = (
    <TextInput
      label={label}
      icon={calendarIcon}
      style={{ paddingBlock: 24 }}
      {...inputProps}
    />
  );

  return (
    <Popover
      trigger={pickerTrigger}
      label="Choose a date"
    >
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

export default DatePicker;
