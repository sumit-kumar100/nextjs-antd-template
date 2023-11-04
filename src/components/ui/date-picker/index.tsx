"use client";

import React from "react";
import dynamic from "next/dynamic";
import { RangePickerProps } from "antd/lib/date-picker";

type DateRangePickerProps = RangePickerProps;

const AntdRangePicker = dynamic(() =>
  import("antd/lib/date-picker").then((module) => module.default.RangePicker),
);

const DateRangePicker: React.FC<DateRangePickerProps> = (props) => {
  return <AntdRangePicker {...props} />;
};

export default DateRangePicker;
