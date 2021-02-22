import React from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from 'app/store/app.hooks';
import { Button } from 'react-native-paper';

import styles from './calendar.styles';

export const Calendar = () => {
  const { lang, timezone } = useAppSelector(state => state.user);
  return (
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
  );
};
