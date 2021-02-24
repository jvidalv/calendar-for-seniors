import { tw } from 'app/utils/tailwind';

export default {
  calendar: tw('flex flex-1 border border-gray-200 p-4'),
  title: tw('text-xl text-purple-500'),
  button: tw('mt-2'),

  days: tw('flex-row w-full justify-between mb-4'),
  day: [tw('items-center justify-center flex-grow'), { width: '14.2857%' }],
  dayText: tw('capitalize text-gray-600 text-lg'),

  month: tw('flex-row w-full flex-wrap items-stretch justify-center '),
  monthDay: [tw('flex items-center h-12'), { width: '14.2857%' }],
  monthDayText: tw('text-gray-800'),
};
