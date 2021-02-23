import React from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from 'app/store/app.hooks';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './calendar-monthly.screen.styles';

export const CalendarMonthlyScreen = () => {
  const { lang, timezone } = useAppSelector(state => state.user);
  return (
    <SafeAreaView>
      <View style={styles.calendar}>
        <Text style={styles.title}>Calendar For Seniors</Text>
        <Text>Lang : {lang}</Text>
        <Text>TimeZone : {timezone}</Text>
        <Button
          loading
          icon="camera"
          mode="contained"
          style={styles.button}
          onPress={() => console.log('Pressed')}
        >
          Cargando el blog de Desu
        </Button>
      </View>
    </SafeAreaView>
  );
};
