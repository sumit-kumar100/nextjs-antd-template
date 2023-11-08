"use client";

import { ArgsProps } from "antd/lib/notification";

const createNotification = async () => {
  const { default: notification } = await import("antd/lib/notification");
  return notification;
};

const error = async (args: ArgsProps) => {
  const notification = await createNotification();
  notification.error({
    placement: "topRight",
    duration: 3,
    ...args,
  });
};

const success = async (args: ArgsProps) => {
  const notification = await createNotification();
  notification.success({
    placement: "topRight",
    duration: 3,
    ...args,
  });
};

const warning = async (args: ArgsProps) => {
  const notification = await createNotification();
  notification.warning({
    placement: "topRight",
    duration: 3,
    ...args,
  });
};

const info = async (args: ArgsProps) => {
  const notification = await createNotification();
  notification.info({
    placement: "topRight",
    duration: 3,
    ...args,
  });
};

const notification = { error, success, warning, info };

export default notification;
