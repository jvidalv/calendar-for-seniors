import { add, addDays, endOfMonth, startOfMonth } from 'date-fns';
import format from 'app/utils/date-fns/format';

const lastDayOfTheMonth = (monthFromToday: number): string =>
  format(endOfMonth(add(Date.now(), { months: monthFromToday })), 'd');

const firstDayOfTheMonth = (monthFromToday: number): Date =>
  startOfMonth(add(Date.now(), { months: monthFromToday }));

export default function(
  monthFromToday: number,
  formatStr: string = 'd'
): string[] {
  return Array.from(
    Array(Number.parseInt(lastDayOfTheMonth(monthFromToday)))
  ).map((e, i) =>
    format(addDays(firstDayOfTheMonth(monthFromToday), i), formatStr)
  );
}
