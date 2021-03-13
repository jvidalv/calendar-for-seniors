export type ICalendarDay = {
  date: string;
  dayNumber: number;
  display: boolean;
};

export type ICalendarMonth = {
  index: number;
  /**
   * Position is relative to the current month, where current month is zero.
   */
  position: number;
  date: string;
  days: ICalendarDay[];
};
