"use client";

import React from "react";
import dynamic from "next/dynamic";
import { RangePickerProps as AntdRangePickerProps } from "antd/lib/date-picker";

const AntdRangePicker = dynamic(() =>
  import("antd/lib/date-picker").then((module) => module.default.RangePicker),
);

const DateRangePicker: React.FC<AntdRangePickerProps> = (props) => {
  return <AntdRangePicker {...props} />;
};

export type DateRangePickerProps = AntdRangePickerProps;

export default DateRangePicker;
