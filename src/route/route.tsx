import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import Home from '../screens/home/home';
import Coin from '../screens/coin/coin';
import {NavigationContainer} from '@react-navigation/native';
import {routeStackParams} from '../utils/types';

const routeStack = createStackNavigator<routeStackParams>();
const stackNavigationOption: StackNavigationOptions = {headerShown: false};

const RouteStackNavigation = () => {
  return (
    <NavigationContainer>
      <routeStack.Navigator screenOptions={stackNavigationOption}>
        <routeStack.Screen name="home" component={Home} />
        <routeStack.Screen name="coin" component={Coin} />
      </routeStack.Navigator>
    </NavigationContainer>
  );
};

export default RouteStackNavigation;
