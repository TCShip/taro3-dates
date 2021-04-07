import isBeforeDay from './isBeforeDay';
import isSameDay from './isSameDay';

export default function isAfterDay(a, b) {
  if (!a || !b) return false;
  return !isBeforeDay(a, b) && !isSameDay(a, b);
}
