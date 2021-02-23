import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CalendarMonthlyScreen } from 'app/screens/calendar/calendar-monthly.screen';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export const AppRoutes = () => {
  return (
    <Drawer.Navigator initialRouteName="Calendar">
      <Drawer.Screen
        name="Calendar"
        component={() => (
          <Stack.Navigator
            initialRouteName="Calendar.Monthly"
            screenOptions={{ headerShown: false }}
          >
            <Drawer.Screen
              name="Calendar.Monthly"
              component={CalendarMonthlyScreen}
            />
          </Stack.Navigator>
        )}
      />
    </Drawer.Navigator>
  );
};
