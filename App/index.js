import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import QuizIndex from './screens/QuizIndex';
import Quiz from './screens/Quiz';
import Updating from './screens/Updating';

const MainStack = createStackNavigator({
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: 'Quizzes',
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({navigation}) => ({
      headerTitle: navigation.getParam('title'),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: navigation.getParam('color'),
        borderBottomColor: navigation.getParam('color'),
      },
    }),
  },
});

const Modals = createStackNavigator(
  {
    Main: MainStack,
    Updating,
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

export default createAppContainer(Modals);
