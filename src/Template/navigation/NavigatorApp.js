import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.
import CategoriesScreen from '../../Pages/CategoriesScreen/CategoriesScreen';
import AuthScreen from '../../Pages/AuthScreen/AuthScreen';

const AppStack = createStackNavigator({ Categories: CategoriesScreen});

const AuthStack = createStackNavigator({ Auth: AuthScreen });

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Auth',
    }
  )
);
export default AppContainer;