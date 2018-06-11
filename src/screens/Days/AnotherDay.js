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

const AnotherDay = () => {
  return (
    <Container>
      <Content>
        <Text>AnotherDay!</Text>
      </Content>
    </Container>
  );
};

AnotherDay.hoursLength = 4;

AnotherDay.description = 'This is the description of the day';

AnotherDay.propTypes = {};

export default AnotherDay;
