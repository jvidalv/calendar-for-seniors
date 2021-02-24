import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { useAppSelector } from 'app/store/app.hooks';
import { Button, Surface } from 'react-native-paper';
import { t } from 'i18n-js';
import weekDays from 'app/utils/date-fns/weekDays';

import styles from './calendar-monthly.screen.styles';
import monthDays from 'app/utils/date-fns/monthDays';

export const CalendarMonthlyScreen = () => {
  const { lang, timezone } = useAppSelector(state => state.user);
  const daysForHeader = useMemo(() => weekDays(), []);
  const daysForMonth = useMemo(() => monthDays(0), []);

  return (
    <Surface style={styles.calendar}>
      <View style={styles.days}>
        {daysForHeader.map((day, i) => (
          <View key={i} style={styles.day}>
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>
      <View style={styles.month}>
        {daysForMonth.map((day, i) => (
          <View key={i} style={styles.monthDay}>
            <Text style={styles.monthDayText}>{day}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.title}>Calendar For Seniors</Text>
      <Text>Lang : {lang}</Text>
      <Text>TimeZone : {timezone}</Text>
      <Text>{t('test')}</Text>
      <Button
        loading
        icon="camera"
        mode="contained"
        style={styles.button}
        onPress={() => console.log('Pressed')}
      >
        Cargando el blog de Desu
      </Button>
    </Surface>
  );
};
