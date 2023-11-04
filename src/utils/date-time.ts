import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export function toIST(date: Date): Dayjs {
  const IST = "Asia/Kolkata";
  return dayjs(date).tz(IST);
}
