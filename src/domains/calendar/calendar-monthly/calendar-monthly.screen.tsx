import React, { useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useAppDispatch } from 'app/store/hooks.store';
import { Surface } from 'react-native-paper';
import {
  getMonthsForFlatList,
  getWeekDays,
  INDEX_CURRENT_MONTH,
  MONTH_UI_HEIGHT,
} from 'app/domains/calendar/calendar-monthly/calendar-monthly.model';
import { ICalendarMonth } from 'app/domains/calendar/calendar-monthly/calendar-monthly.types';
import { setActiveMonths } from 'app/domains/calendar/store/calendar.slice';
import format from 'app/utils/date-fns/format';
import { CalendarMonthlyMonth } from 'app/domains/calendar/calendar-monthly/components/calendar-monthly.month';

import styles from './calendar-monthly.screen.styles';

export const CalendarMonthlyScreen = () => {
  const daysForHeader = useMemo(() => getWeekDays(), []);
  const dispatch = useAppDispatch();

  return (
    <Surface style={styles.calendar}>
      <View style={styles.days}>
        {daysForHeader.map((day, i) => (
          <View key={i} style={styles.day}>
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>
      <FlatList<ICalendarMonth>
        data={getMonthsForFlatList()}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={items => {
          if (!items.viewableItems?.length) {
            return;
          }

          const activeItem = {
            ...items.viewableItems?.[0].item,
          } as ICalendarMonth;

          dispatch(
            setActiveMonths({
              currentMonth: {
                ...activeItem,
                year: format(new Date(activeItem.date), 'y'),
                month: format(new Date(activeItem.date), 'MMMM'),
              },
              visibleMonths: [...items.viewableItems.map(({ item }) => item)],
            })
          );
        }}
        viewabilityConfig={{
          minimumViewTime: 25,
          viewAreaCoveragePercentThreshold: 30,
        }}
        getItemLayout={(data, index) => ({
          length: MONTH_UI_HEIGHT,
          offset: MONTH_UI_HEIGHT * index - 10,
          index,
        })}
        renderItem={props => <CalendarMonthlyMonth month={props.item} />}
        initialNumToRender={6}
        initialScrollIndex={INDEX_CURRENT_MONTH}
        keyExtractor={(_, i) => `${i}`}
      />
    </Surface>
  );
};
