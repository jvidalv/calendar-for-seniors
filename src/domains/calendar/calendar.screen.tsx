import React, { FC } from 'react';
import { View } from 'react-native';
import { Fab } from 'app/components/atoms/fab/fab';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/core';

import styles from './calendar.screen.styles';

export const CalendarScreen: FC = ({ children }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.calendar}>
      {children}
      <Fab
        style={styles.fab}
        onPress={() => navigation.navigate('Event', { key: 1 })}
      >
        <Icon style={styles.fabIcon} name="plus" size={46} />
      </Fab>
    </View>
  );
};
