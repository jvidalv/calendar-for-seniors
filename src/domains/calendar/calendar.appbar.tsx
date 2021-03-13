import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './calendar.appbar.styles';
import { useAppSelector } from 'app/store/hooks.store';

const HeaderBackground = () => <View />;

const HeaderLeft = () => (
  <Icon name="dots-vertical" style={styles.iconLeft} size={30} />
);

const HeaderRight = () => (
  <Icon name="calendar" style={styles.iconRight} size={30} />
);

const HeaderCenter = () => {
  const { year, month } = useAppSelector(s => s.calendar.monthly.currentMonth);
  return (
    <View style={styles.center}>
      <Text style={styles.title}>{month}</Text>
      <Text style={styles.subtitle}>{year}</Text>
    </View>
  );
};

export default {
  HeaderLeft,
  HeaderRight,
  HeaderCenter,
  HeaderBackground,
};
