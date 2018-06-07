import * as Expo from 'expo';
import React from 'react';
import {
  Container,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Header,
  Icon,
  Text,
  Card,
  CardItem,
  Thumbnail,
} from 'native-base';
import CardDay from './components/CardDay';
import NativeLoader from './components/NativeLoader';
import { createStackNavigator } from 'react-navigation';
import StopWatch from './Days/StopWatch';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home screen',
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      display: 'flex',
      flex: 1,
    },
    headerStyle: {
      backgroundColor: 'white',
    },
  };

  render() {
    return (
      <Container>
        <Content>
          <CardDay
            timeSpent="2 hours"
            title="StopWatch"
            description="Sample description"
          />
        </Content>
      </Container>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    StopWatch: { screen: StopWatch },
  },
  {
    initialRouteName: 'Home',
  },
);

const App = () => (
  <NativeLoader>
    <RootStack />
  </NativeLoader>
);

export default App;
