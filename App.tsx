import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'app/store/app.store';
import { Calendar } from 'app/screens/calendar';
import { Provider as PaperProvider } from 'react-native-paper';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Calendar />
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
};

export default App;
