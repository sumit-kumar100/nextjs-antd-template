"use client";

import React from "react";
import { useForm, useWatch } from "antd/lib/form/Form";
import { FormProps, FormItemProps, FormListProps } from "antd/lib/form";
import dynamic from "next/dynamic";

const AntdForm = dynamic(() => import("antd/lib/form"));
const AntdFormItem = dynamic(() => import("antd/lib/form/FormItem"));
const AntdFormList = dynamic(() => import("antd/lib/form/FormList"));

interface AntdFormProps extends FormProps {
  children: React.ReactNode;
}

const Form: React.FC<AntdFormProps> = (props) => {
  return <AntdForm {...props} />;
};

const FormItem: React.FC<FormItemProps> = (props) => {
  return <AntdFormItem {...props} />;
};

const FormList: React.FC<FormListProps> = (props) => {
  return <AntdFormList {...props} />;
};

export { useForm, useWatch, Form, FormItem, FormList };
