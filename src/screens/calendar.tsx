import React from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from 'app/store/app.hooks';

export const Calendar = () => {
  const { lang, timezone } = useAppSelector(state => state.user);
  return (
    <View>
      <Text>Calendar For Seniors</Text>
      <Text>Lang : {lang}</Text>
      <Text>TimeZone : {timezone}</Text>
    </View>
  );
};
