import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'app/store/app.store';
import { Calendar } from 'app/screens/calendar';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Calendar />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
