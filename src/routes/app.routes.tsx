import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CalendarMonthlyScreen } from 'app/screens/calendar/calendar-monthly.screen';
import { createStackNavigator } from '@react-navigation/stack';
import { CalendarAppbar } from 'app/screens/calendar/calendar.appbar';
import { View } from 'react-native';

import styles from './app.routes.styles';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const CalendarRoutes = () => (
  <View style={styles.calendar}>
    <Stack.Navigator
      initialRouteName="Calendar.Monthly"
      screenOptions={{
        header: CalendarAppbar,
        cardStyle: styles.calendarCard,
      }}
    >
      <Drawer.Screen
        name="Calendar.Monthly"
        component={CalendarMonthlyScreen}
      />
    </Stack.Navigator>
  </View>
);

export const AppRoutes = () => {
  return (
    <Drawer.Navigator initialRouteName="Calendar">
      <Drawer.Screen name="Calendar" component={CalendarRoutes} />
    </Drawer.Navigator>
  );
};
