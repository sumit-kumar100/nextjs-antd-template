import type { ThemeConfig } from "antd";
import { themeLight, themeDark } from "./theme";

export const theme: ThemeConfig = {
  token: {
    ...themeLight,
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
