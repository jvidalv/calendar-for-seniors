import { tw } from 'app/utils/tailwind';
import {
  DAY_UI_HEIGHT,
  MONTH_UI_HEIGHT,
} from 'app/domains/calendar/calendar-monthly/calendar-monthly.model';

export default {
  month: [
    tw(
      'flex-row relative items-center w-full flex-wrap bg-blue-500 items-stretch opacity-100'
    ),
    { height: MONTH_UI_HEIGHT },
  ],
  monthOff: tw('opacity-90'),
  monthDay: [
    tw('flex items-center bg-green-500'),
    { width: '14.2857%', height: DAY_UI_HEIGHT },
  ],
  monthDayText: tw('text-gray-800'),
  monthName: tw('absolute right-0 bottom-full m-4 bg-red-500'),
  monthNameText: tw('text-lg'),
};
