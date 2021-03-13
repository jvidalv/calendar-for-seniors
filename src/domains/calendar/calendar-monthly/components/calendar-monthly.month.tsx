import React, { FC, useMemo } from 'react';
import { useAppSelector } from 'app/store/hooks.store';
import { Text, View } from 'react-native';
import { monthFromNumber } from 'app/utils/date-fns/utils';
import { ICalendarMonth } from 'app/domains/calendar/calendar-monthly/calendar-monthly.types';

import styles from './calendar-monthly.month.styles';

export const CalendarMonthlyMonth: FC<{ month: ICalendarMonth }> = ({
  month,
}) => {
  const positions = useAppSelector(s =>
    s.calendar.monthly.visibleMonths.map(({ position }) => position)
  );
  const isActive = useMemo(() => positions.includes(month.position), [
    month.position,
    positions,
  ]);
  const monthName = useMemo(() => monthFromNumber(month.position, 'LLL'), [
    month.position,
  ]);

  return (
    <View style={[styles.month, !isActive ? styles.monthOff : null]}>
      {month.days.map((d, i) => (
        <View key={i} style={styles.monthDay}>
          <Text style={styles.monthDayText}>
            {d.display ? d.dayNumber : null}
          </Text>
        </View>
      ))}
      <View style={styles.monthName}>
        <Text style={styles.monthNameText}>{monthName}</Text>
      </View>
    </View>
  );
};
