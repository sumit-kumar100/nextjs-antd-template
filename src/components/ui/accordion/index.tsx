"use client";

import React from "react";
import { CollapseProps as AntdAccordionProps } from "antd/lib/collapse";
import dynamic from "next/dynamic";

const AntdAccordion = dynamic(() => import("antd/lib/collapse"));

const Accordion: React.FC<AntdAccordionProps> = (props) => {
  return <AntdAccordion {...props} />;
};

export type AccordionProps = AntdAccordionProps;

export default Accordion;
