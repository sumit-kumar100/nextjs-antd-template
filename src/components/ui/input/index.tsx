"use client";

import dynamic from "next/dynamic";

const Input = dynamic(() => import("antd/lib/input"));

const InputPassword = dynamic(() =>
  import("antd/lib/input").then((module) => module.default.Password),
);

export default Input;

export { InputPassword };
