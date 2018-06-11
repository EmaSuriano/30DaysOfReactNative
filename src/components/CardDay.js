import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { Card, CardItem, Text, Icon, Left, Body } from 'native-base';

const CardDay = ({
  hours,
  title,
  icon,
  description,
  navigation,
  screenName,
}) => (
  <Card>
    <CardItem button bordered onPress={() => navigation.navigate(screenName)}>
      <Left>
        <Icon name={icon} />
        <Body>
          <Text>{title}</Text>
          <Text note>Time spent: {hours} hours</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem>
      <Body>
        <Image source={{ uri: 'Image URL' }} style={{ height: 100, flex: 1 }} />
        <Text>{description}</Text>
      </Body>
    </CardItem>
  </Card>
);

CardDay.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  screenName: PropTypes.string.isRequired,
  hours: PropTypes.number,
  description: PropTypes.string,
};

CardDay.defaultProps = {
  hours: 0,
  description: '',
};

export default withNavigation(CardDay);
