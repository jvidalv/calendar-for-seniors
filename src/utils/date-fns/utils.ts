import format from 'app/utils/date-fns/format';
import { add, endOfMonth, startOfMonth } from 'date-fns';

export const monthFromNumber = (
  monthFromToday: number,
  formatString: string
): string =>
  format(endOfMonth(add(Date.now(), { months: monthFromToday })), formatString);

export const lastDayOfTheMonth = (
  monthFromToday: number,
  formatString: string
): string =>
  format(endOfMonth(add(Date.now(), { months: monthFromToday })), formatString);

export const firstDayOfTheMonthAsDate = (monthFromToday: number): Date =>
  startOfMonth(add(Date.now(), { months: monthFromToday }));

export const isToday = (date: Date): boolean => {
  const today = new Date();
  return (
    date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
  );
};
