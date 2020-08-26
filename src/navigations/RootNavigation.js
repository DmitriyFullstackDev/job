import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import AuthScreen from '../screens/AuthScreen/Auth'
import DrawerNavigation from './DrawNavigation'
import SplashScreen from '../screens/AuthScreen/Splash';

const FirstNavigation = createStackNavigator(
    {
        Splash    : { screen : SplashScreen },
        Auth      : { screen : AuthScreen }
    },
    {
        initialRouteName : 'Splash',
        navigationOptions : {
        },
        headerMode : 'none'
    }
)

const AppNavigator = createSwitchNavigator(
    {
        Loading: FirstNavigation,
        Draw: DrawerNavigation,
    },
    {
        initialRouteName: 'Loading'
    }
)

const App = createAppContainer(AppNavigator);

export default App;
