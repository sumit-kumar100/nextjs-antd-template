"use client";

import dynamic from "next/dynamic";

const Form = dynamic(() => import("antd/lib/form/Form"));
const FormItem = dynamic(() => import("antd/lib/form/FormItem"));
const FormList = dynamic(() => import("antd/lib/form/FormList"));

export default Form;

export { FormItem, FormList };
