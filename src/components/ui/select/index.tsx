import React from "react";
import {
  SelectProps as AntdSelectProps,
  BaseOptionType,
} from "antd/lib/select";
import dynamic from "next/dynamic";

const AntdSelect = dynamic(() => import("antd/lib/select"));

type CustomOptionType = BaseOptionType & { label: string };

const Select: React.FC<AntdSelectProps<CustomOptionType>> = (props) => {
  return <AntdSelect {...(props as any)} />;
};

export type SelectProps = AntdSelectProps;

export default Select;
