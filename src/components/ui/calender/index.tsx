"use client";

import React from "react";
import { CalendarProps as AntdCalendarProps } from "antd/lib/calendar";
import dynamic from "next/dynamic";

const AntdCalendar = dynamic(() => import("antd/lib/calendar"));

const Calendar: React.FC<AntdCalendarProps<any>> = (props) => {
  return <AntdCalendar {...props} />;
};

export type CalenderProps = AntdCalendarProps<any>;

export default Calendar;
