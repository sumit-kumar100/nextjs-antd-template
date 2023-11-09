"use client";

import React from "react";
import { SpinProps as AntdSpinProps } from "antd/lib/spin";
import dynamic from "next/dynamic";

const AntdSpin = dynamic(() => import("antd/lib/spin"));

const Spin: React.FC<AntdSpinProps> = (props) => {
  return <AntdSpin {...props} />;
};

type AntdCustomSpinProps = React.HTMLAttributes<HTMLDivElement>;

const CustomSpin: React.FC<AntdCustomSpinProps> = (props) => {
  return (
    <div {...props} className="loader-container">
      <div className="loader">{""}</div>
    </div>
  );
};

export type SpinProps = AntdSpinProps;

export type CustomSpinProps = AntdCustomSpinProps;

export { Spin, CustomSpin };
