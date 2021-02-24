import React, { FC } from 'react';
import { View } from 'react-native';
import { Fab } from 'app/components/atoms/fab/fab';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './calendar.screen.styles';

export const CalendarScreen: FC = ({ children }) => {
  return (
    <View style={styles.calendar}>
      {children}
      <Fab style={styles.fab} onPress={() => console.log('Pressed')}>
        <Icon style={styles.fabIcon} name="plus" size={46} />
      </Fab>
    </View>
  );
};
