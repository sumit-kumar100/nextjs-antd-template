"use client";

import React from "react";
import { TimePickerProps as AntdTimePickerProps } from "antd/lib/time-picker";
import dynamic from "next/dynamic";

const AntdTimePicker = dynamic(() => import("antd/lib/time-picker"));

const TimePicker: React.FC<AntdTimePickerProps> = (props) => {
  return <AntdTimePicker {...props} />;
};

export type TimePickerProps = AntdTimePickerProps;

export default TimePicker;
