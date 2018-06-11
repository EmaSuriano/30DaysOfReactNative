import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Button,
  Text,
  Footer,
  FooterTab,
  Icon,
} from 'native-base';
import Days from './Days';
import CardDay from '../components/CardDay';
import { createStackNavigator } from 'react-navigation';

// const AnotherDay = () => 'Another Day';

// const StopWatch = () => 'Stop Watch';

// const HomeStack = createStackNavigator({
//   AnotherDay: {
//     screen: AnotherDay,
//   },
//   StopWatch: {
//     screen: StopWatch,
//   },
// });

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  static navigationOptions = ({ navigation }) => ({
    title: '30 Days of React Native',
  });

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Content>
          {Days.map(({ id, ...dayProps }) => (
            <CardDay key={id} {...dayProps} />
          ))}
        </Content>
        <Footer>
          <FooterTab>
            <Button full onPress={() => navigation.navigate('About')}>
              <Text>About</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
