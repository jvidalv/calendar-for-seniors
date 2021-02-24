import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CalendarMonthlyScreen } from 'app/domains/calendar/calendar-monthly.screen';
import { createStackNavigator } from '@react-navigation/stack';
import CalendarAppbar from 'app/domains/calendar/calendar.appbar';
import { CalendarScreen } from 'app/domains/calendar/calendar.screen';

import styles from './app.routes.styles';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const CalendarRoutes = () => (
  <CalendarScreen>
    <Stack.Navigator
      initialRouteName="Calendar.Monthly"
      screenOptions={{
        cardStyle: styles.calendarCard,
        headerTitleAlign: 'center',
        headerLeft: CalendarAppbar.HeaderLeft,
        headerRight: CalendarAppbar.HeaderRight,
        headerTitle: CalendarAppbar.HeaderCenter,
        headerBackground: CalendarAppbar.HeaderBackground,
        headerStyle: styles.calendarHeader,
      }}
    >
      <Drawer.Screen
        name="Calendar.Monthly"
        component={CalendarMonthlyScreen}
      />
    </Stack.Navigator>
  </CalendarScreen>
);

export const AppRoutes = () => {
  return (
    <Drawer.Navigator initialRouteName="Calendar">
      <Drawer.Screen name="Calendar" component={CalendarRoutes} />
    </Drawer.Navigator>
  );
};
