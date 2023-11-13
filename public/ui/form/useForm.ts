import React from "react";
import * as _util from "antd/lib/form/util";
import useRcForm from "rc-field-form/lib/useForm";
import type { FormInstance } from "rc-field-form/lib/interface";

type FormProps = FormInstance & {
  scrollToField: (name: string | string[], options?: any) => void;
  getFieldInstance: (name: string | string[]) => any;
  __INTERNAL__: {
    itemRef: (name: string | string[]) => (node: any) => void;
    name?: string;
  };
};

function toNamePathStr(name: string | string[]) {
  const namePath = _util.toArray(name);
  return namePath.join("_");
}

function useForm(form?: FormInstance): [FormProps] {
  const [rcForm] = useRcForm();
  const itemsRef = React.useRef<{ [namePath: string]: any }>({});

  const wrapForm = React.useMemo<FormProps>(() => {
    const formInstance = form ?? rcForm;

    const wrappedForm: FormProps = {
      ...formInstance,
      __INTERNAL__: {
        itemRef: (name: string | string[]) => (node: any) => {
          const namePathStr = toNamePathStr(name);
          if (node) {
            itemsRef.current[namePathStr] = node;
          } else {
            delete itemsRef.current[namePathStr];
          }
        },
      },
      scrollToField: async (name: string | string[], options: any = {}) => {
        const namePath = _util.toArray(name);
        const fieldId = _util.getFieldId(
          namePath,
          wrappedForm.__INTERNAL__.name,
        );
        const node = fieldId ? document.getElementById(fieldId) : null;
        if (node) {
          const scrollIntoViewIfNeeded = await import(
            "scroll-into-view-if-needed"
          ).then((module) => module.default);

          scrollIntoViewIfNeeded(node, {
            scrollMode: "if-needed",
            block: "nearest",
            ...options,
          });
        }
      },
      getFieldInstance: (name: string | string[]) => {
        const namePathStr = toNamePathStr(name);
        return itemsRef.current[namePathStr];
      },
    };

    return wrappedForm;
  }, [form, rcForm]);

  return [wrapForm];
}

export default useForm;
