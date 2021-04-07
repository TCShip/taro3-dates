import isBeforeDay from './isBeforeDay';

export default function isInclusivelyAfterDay(a, b) {
  if (!a || !b) return false;
  return !isBeforeDay(a, b);
}
