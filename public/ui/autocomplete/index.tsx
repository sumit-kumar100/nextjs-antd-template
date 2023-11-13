"use client";

import React from "react";
import { AutoCompleteProps as AntdAutoCompleteProps } from "antd/lib/auto-complete";
import dynamic from "next/dynamic";

const AntdAutoComplete = dynamic(() => import("antd/lib/auto-complete"));

const AutoComplete: React.FC<AntdAutoCompleteProps<unknown, any>> = (props) => {
  return <AntdAutoComplete {...props} />;
};

export type AutoCompleteProps = AntdAutoCompleteProps;

export default AutoComplete;
