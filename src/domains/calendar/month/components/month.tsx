import React, { FC, useMemo } from 'react';
import { useAppSelector } from 'app/store/hooks.store';
import { Text, View } from 'react-native';
import { monthFromNumber } from 'app/utils/date-fns/utils';
import { ICalendarMonth } from 'app/domains/calendar/month/month.types';

import styles from './month.styles';

type Props = {
  month: ICalendarMonth;
};

export const Month = ({ month }: Props) => {
  const positions = useAppSelector(s =>
    s.calendar.month.visibleMonths.map(({ position }) => position)
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
      {month.days.map(({ isToday, display, dayNumber }, i) => (
        <View key={i} style={styles.day}>
          {isToday && <View style={styles.today} />}
          <Text style={styles.dayText}>{display ? dayNumber : null}</Text>
          <View></View>
        </View>
      ))}
      <View style={styles.monthName}>
        <Text style={styles.monthNameText}>{monthName}</Text>
      </View>
    </View>
  );
};
