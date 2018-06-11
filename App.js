import React from 'react';
import { createStackNavigator } from 'react-navigation';
import NativeBaseLoader from './src/components/NativeBaseLoader';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Days from './src/screens/Days';

const days = Days.reduce(
  (acc, { screenName, Screen }) => ({
    ...acc,
    [screenName]: Screen,
  }),
  {},
);

console.log(days);

const RootStack = createStackNavigator(
  {
    Home,
    About,
    ...days,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold',
        flex: 1,
      },
    },
  },
);

const App = () => (
  <NativeBaseLoader>
    <RootStack />
  </NativeBaseLoader>
);

export default App;
