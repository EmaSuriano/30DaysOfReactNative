import React from 'react';
import { Image } from 'react-native';
import { withNavigation } from 'react-navigation';

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import PropTypes from 'prop-types';

const CardDay = ({ timeSpent, title, description, navigation }) => {
  return (
    <Card>
      <CardItem>
        <Left>
          <Icon name="logo-github" />
          <Body>
            <Text>{title}</Text>
            {description && <Text note>{description}</Text>}
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image
          source={{ uri: 'Image URL' }}
          style={{ height: 200, width: null, flex: 1 }}
        />
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent onPress={() => navigation.navigate(title)}>
            <Icon active name="thumbs-up" />
            <Text>Check!</Text>
          </Button>
        </Left>
        <Right>
          <Text>Time spent: {timeSpent}</Text>
        </Right>
      </CardItem>
    </Card>
  );
};

CardDay.propTypes = {
  timeSpent: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default withNavigation(CardDay);
