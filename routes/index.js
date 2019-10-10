// import React from 'react';
// import { createStackNavigator } from 'react-navigation';

// import Products from '../pages/Products';
// import Checkout from '../pages/Checkout';
// import Receipt from '../pages/Receipt';
// import themes from '../styles/theme.style';

// const Route = createStackNavigator(
// {
//   Products: { screen: Products},
//   Checkout: { screen: Checkout},
//   Receipt: { screen: Receipt}
// },
// {
//  navigationOptions: {
//     headerStyle: {
//         backgroundColor: themes.BACKGROUND_COLOR,
//         paddingHorizontal: 10,
//     },
//     headerTintColor: '#fff'
//  }
// }
// );
// export default Route;
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Products from '../screens/Products';
import Checkout from '../screens/Checkout';
import Receipt from '../screens/Receipt';
import HomeScreen from '../screens/HomeScreen';
import themes from '../styles/theme.style';

const RootStack = createStackNavigator({
Products,
Checkout,
Receipt,
Home: HomeScreen
}, 
{
  initialRouteParams: 'Home',
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#31b6eb',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

const App = createAppContainer(RootStack);

export default App;