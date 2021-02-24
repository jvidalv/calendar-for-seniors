import React from 'react';
import format from 'date-fns/format';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './calendar.appbar.styles';

const HeaderBackground = () => <View />;

const HeaderLeft = () => (
  <Icon name="dots-vertical" style={styles.iconLeft} size={30} />
);

const HeaderRight = () => (
  <Icon name="calendar" style={styles.iconRight} size={30} />
);

const HeaderCenter = () => (
  <View style={styles.center}>
    <Text style={styles.title}>{format(Date.now(), 'MMMM')}</Text>
    <Text style={styles.subtitle}>{format(Date.now(), 'y')}</Text>
  </View>
);

export default {
  HeaderLeft,
  HeaderRight,
  HeaderCenter,
  HeaderBackground,
};
