import dayjs from 'dayjs';

import isSameDay from './isSameDay';

export default function isNextDay(a, b) {
  if (!a || !b) return false;
  const nextDay = dayjs(a).add(1, 'day');
  return isSameDay(nextDay, b);
}
