"use client";

import React from "react";
import {
  FormProps as AntdFormProps,
  FormItemProps as AntdFormItemProps,
  FormListProps as AntdFormListProps,
} from "antd/lib/form";
import dynamic from "next/dynamic";


const AntdForm = dynamic(() => import("antd/lib/form/Form"));
const AntdFormItem = dynamic(() => import("antd/lib/form/FormItem"));
const AntdFormList = dynamic(() => import("antd/lib/form/FormList"));

const Form: React.FC<AntdFormProps> = (props: any) => {
  return <AntdForm {...props} />;
};

const FormItem: React.FC<AntdFormItemProps> = (props) => {
  return <AntdFormItem {...props} />;
};

const FormList: React.FC<AntdFormListProps> = (props) => {
  return <AntdFormList {...props} />;
};

export type FormProps = AntdFormProps;

export type FormItemProps = AntdFormItemProps;

export type FormListProps = AntdFormListProps;

export default Form;

export { FormItem, FormList };