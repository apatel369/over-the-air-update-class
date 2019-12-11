import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import codePush from 'react-native-code-push';

import App from './App';
import {name as appName} from './app.json';

const CodePushifiedApp = codePush(App);

AppRegistry.registerComponent(appName, () => CodePushifiedApp);
