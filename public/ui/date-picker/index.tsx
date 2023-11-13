"use client";

import React from "react";
import dynamic from "next/dynamic";
import {
  DatePickerProps as AntdDatePickerProps,
  RangePickerProps as AntdRangePickerProps,
} from "antd/lib/date-picker";

const AntdDatePicker = dynamic(() => import("antd/lib/date-picker"));

const AntdRangePicker = dynamic(() =>
  import("antd/lib/date-picker").then((module) => module.default.RangePicker),
);

const DatePicker: React.FC<AntdDatePickerProps> = (props) => {
  return <AntdDatePicker {...props} />;
};

const DateRangePicker: React.FC<AntdRangePickerProps> = (props) => {
  return <AntdRangePicker {...props} />;
};

export type DatePickerProps = AntdDatePickerProps;

export type DateRangePickerProps = AntdRangePickerProps;

export { DatePicker, DateRangePicker };
