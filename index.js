import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import i18nInit from 'app/infrastructure/i18n/i18n';

AppRegistry.registerComponent(appName, () => {
  i18nInit();
  return App;
});
