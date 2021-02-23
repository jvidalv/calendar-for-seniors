import React from 'react';
import { Appbar } from 'react-native-paper';
import { DateTime } from 'luxon';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './calendar.appbar.styles';

export const CalendarAppbar = () => {
  return (
    <Appbar.Header style={styles.header}>
      <Icon name="dots-vertical" style={styles.icon} size={30} />
      <View style={styles.center}>
        <Text style={styles.title}>{DateTime.now().get('monthLong')}</Text>
        <Text style={styles.subtitle}>{DateTime.now().get('year')}</Text>
      </View>
      <Icon name="calendar" style={styles.icon} size={30} />
    </Appbar.Header>
  );
};
