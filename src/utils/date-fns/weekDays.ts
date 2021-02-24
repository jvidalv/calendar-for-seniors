import { addDays, startOfWeek } from 'date-fns';
import format from 'app/utils/date-fns/format';

const firstDayWeek = startOfWeek(new Date());

export default function(formatStr: string = 'EEEEEE'): string[] {
  return Array.from(Array(7)).map((e, i) =>
    format(addDays(firstDayWeek, i + 1), formatStr)
  );
}
