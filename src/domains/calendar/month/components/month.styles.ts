import { tw } from 'app/utils/tailwind';
import {
  DAY_UI_HEIGHT,
  MONTH_UI_HEIGHT,
} from 'app/domains/calendar/month/month.model';

export default {
  month: [
    tw(
      'flex-row relative items-center w-full flex-wrap items-stretch opacity-100'
    ),
    { height: MONTH_UI_HEIGHT },
  ],
  monthOff: tw('opacity-70'),

  day: [
    tw('flex items-center pt-1'),
    { width: '14.2857%', height: DAY_UI_HEIGHT },
  ],

  today: tw('absolute w-full h-full border-2 border-blue-500 rounded-sm'),

  dayText: tw('text-gray-800'),

  monthName: tw('absolute right-0 bottom-full m-4'),
  monthNameText: tw('text-xl font-medium'),
};
