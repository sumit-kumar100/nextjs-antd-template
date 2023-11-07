import type { ThemeConfig } from "antd";
import { globalLight, globalDark } from "./global";

export const theme: ThemeConfig = {
  token: {
    ...globalLight,
  },
  components: {
    DatePicker: {
      controlHeight: 36,
      lineWidth: 1.3333332,
      activeShadow: "none",
      errorActiveShadow: "none",
      warningActiveShadow: "none",
    },
    Input: {
      controlHeight: 36,
      lineWidth: 1.3333332,
      activeShadow: "none",
      errorActiveShadow: "none",
      warningActiveShadow: "none",
    },
    InputNumber: {
      controlHeight: 36,
      lineWidth: 1.3333332,
      activeShadow: "none",
      errorActiveShadow: "none",
      warningActiveShadow: "none",
    },
  },
};
