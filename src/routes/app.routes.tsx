import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MonthScreen } from 'app/domains/calendar/month/month.screen';
import { createStackNavigator } from '@react-navigation/stack';
import CalendarAppbar from 'app/domains/calendar/calendar.appbar';

import styles from './app.routes.styles';
import { CalendarScreen } from 'app/domains/calendar/calendar.screen';
import { EventScreen } from 'app/domains/calendar/event/event.screen';

const EventsStack = createStackNavigator();

const EventsRoutes = () => (
  <EventsStack.Navigator
    initialRouteName="Event.New"
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: 'transparent',
      },
      cardOverlayEnabled: false,
    }}
  >
    <EventsStack.Screen name="Event.New" component={EventScreen} />
  </EventsStack.Navigator>
);

const CalendarMonthlyStack = createStackNavigator();

const CalendarRoutes = () => (
  <CalendarScreen>
    <CalendarMonthlyStack.Navigator
      mode="modal"
      initialRouteName="Calendar.Monthly"
      screenOptions={{
        headerTitleAlign: 'center',
        headerLeft: CalendarAppbar.HeaderLeft,
        headerRight: CalendarAppbar.HeaderRight,
        headerTitle: CalendarAppbar.HeaderCenter,
        headerBackground: CalendarAppbar.HeaderBackground,
        headerStyle: styles.calendarHeader,
      }}
    >
      <CalendarMonthlyStack.Screen
        name="Calendar.Monthly"
        component={MonthScreen}
      />
    </CalendarMonthlyStack.Navigator>
  </CalendarScreen>
);

const CalendarStack = createStackNavigator();

const CalendarRoutes2 = () => (
  <CalendarStack.Navigator
    initialRouteName="Calendar"
    mode="modal"
    screenOptions={{ headerShown: false }}
  >
    <CalendarStack.Screen name="Calendar" component={CalendarRoutes} />
    <CalendarStack.Screen
      name="Event"
      component={EventsRoutes}
      options={{
        cardStyle: { marginTop: '20%' },
      }}
    />
  </CalendarStack.Navigator>
);

const AppDrawer = createDrawerNavigator();

export const AppRoutes = () => {
  return (
    <AppDrawer.Navigator initialRouteName="Calendar">
      <AppDrawer.Screen name="Calendar" component={CalendarRoutes2} />
    </AppDrawer.Navigator>
  );
};
