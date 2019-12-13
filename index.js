import {AppRegistry, Platform} from 'react-native';
import 'react-native-gesture-handler';
import codePush from 'react-native-code-push';

import App from './App';
import {name as appName} from './app.json';

const codePushKeys = Platform.select({
  ios: {
    STAGING: 'EiDlCE-qAf064PpRtrm71580BbY253gA5v8_7',
    PRODUCTION: 'leSHw5zojJ0yBpf_ySKh1URSWVqL03B4z3fJ8P',
  },
  android: {
    STAGING: 'GedY7WAQxMC4j5xV2DPuRFDaNCScOAOesYyXx',
    PRODUCTION: '4s3EMcMZWEXr7t3lq3CR2q0SAzY4fKD3ylyxX',
  },
});

const isBetaUser = true;

const CodePushifiedApp = codePush({
  deploymentKey: isBetaUser ? codePushKeys.STAGING : codePushKeys.PRODUCTION,
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
})(App);

AppRegistry.registerComponent(appName, () => CodePushifiedApp);
