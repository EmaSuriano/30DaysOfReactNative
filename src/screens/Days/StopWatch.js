import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Card,
  CardItem,
  Thumbnail,
} from 'native-base';

const StopWatch = () => {
  return (
    <Container>
      <Content>
        <Text>StopWatch!</Text>
      </Content>
    </Container>
  );
};

StopWatch.hoursLength = 4;

StopWatch.description = 'This is the description of the day';

StopWatch.navigationOptions = {
  title: 'Stop watch',
};

StopWatch.propTypes = {};

export default StopWatch;
