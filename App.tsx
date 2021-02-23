import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'app/store/app.store';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from 'app/routes/app.routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <AppRoutes />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
