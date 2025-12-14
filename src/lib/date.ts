import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function formatPostDate(date: Date | string): string {
  const originalDate = dayjs(date);
  const now = dayjs();
  const hoursDifference = now.diff(originalDate, "hour");
  if (hoursDifference < 24) {
    const timeAgo = originalDate.fromNow(true);
    if (timeAgo.includes("hour")) {
      return timeAgo
        .replace("hours", "h")
        .replace("hour", "h")
        .replace("a few seconds", "now")
        .replace("a minute", "1min")
        .replace("minutes", "min")
        .replace("a minute", "1min");
    }
    if (timeAgo.includes("minute")) {
      return timeAgo.replace("minutes", "min").replace("a minute", "1min");
    }
    if (timeAgo.includes("second")) {
      return "now";
    }
    return timeAgo;
  } else {
    return originalDate.format("MMM D");
  }
}
